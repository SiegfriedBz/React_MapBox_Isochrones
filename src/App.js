import { useState } from 'react';
import NavBar from './components/NavBar'
import Form from './components/Form'
import MapBox from './components/MapBox'
import "../src/styles/App.css";

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

function App() {

  // Inputs for Users location (forward GeoCoder API Call) + for Isochrone API Call
  const [user1Input, setUser1Input] = useState({address1: "", profile1:"", duration1: ""});
  const [user2Input, setUser2Input] = useState({address2: "", profile2:"", duration2: ""});

  // Users Coordinates from GeoCoder API Call
  const [fetchedUser1Coordinates, setFetchedUser1Coordinates] = useState({lat:"", long:""});
  const [fetchedUser2Coordinates, setFetchedUser2Coordinates] = useState({lat:"", long:""});

  // GeoJson data from Isochrone API Call
  const [fetchedGeoGlobal, setFetchedGeoJsonGlobal] = useState([]);

  const handleIsochroneSearch = async(e) => {
    e.preventDefault();

    // Get user 1 data from the home page input
    let {address1, profile1, duration1} = user1Input;
    address1 = address1.slice(0,-1)
    profile1 = profile1.slice(0,-1)
    duration1 = parseInt(duration1.slice(0,-1))

    // Get user 2 data from the home page input
    let {address2, profile2, duration2} = user2Input;
    address2 = address2.slice(0,-1)
    profile2 = profile2.slice(0,-1)
    duration2 = parseInt(duration2.slice(0,-1))

    try {
      // // ** User 1 **
      // Fetch user1 Coordinates from the GeoCoding API
      const resp1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address1}.json?access_token=${MAPBOX_TOKEN}`);
      const data1 = await resp1.json();
      const [ userLong1, userLat1 ] = data1.features[0].center;

      // // Fetch User1 Isochrone data from the Isochrone API
      const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/';

      const query1 = await fetch(
        `${urlBase}${profile1}/${userLong1},${userLat1}?contours_minutes=${duration1}&polygons=true&access_token=${MAPBOX_TOKEN}`,
        { method: 'GET' }
      );
      const isoData1 = await query1.json();

      // ** User 2 **
      // Fetch user2 Coordinates from the GeoCoding API
      const resp2 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address2}.json?access_token=${MAPBOX_TOKEN}`);
      const data2 = await resp2.json();
      const [ userLong2, userLat2 ] = data2.features[0].center;

      // Fetch User2 Isochrone data from the Isochrone API
      const query2 = await fetch(
        `${urlBase}${profile2}/${userLong2},${userLat2}?contours_minutes=${duration2}&polygons=true&access_token=${MAPBOX_TOKEN}`,
        { method: 'GET' }
      );
      const isoData2 = await query2.json();

      // Set GeoJson of user1&2 data to pass to Mapbox
      console.log(isoData1)
      console.log(isoData2)
      setFetchedGeoJsonGlobal([isoData1, isoData2])

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Form
          user1Input={user1Input}
          setUser1Input={setUser1Input}
          user2Input={user2Input}
          setUser2Input={setUser2Input}
          handleIsochroneSearch={handleIsochroneSearch}
        />
        <MapBox
          fetchedGeoGlobal={fetchedGeoGlobal}
        />
      </div>
    </div>
  );
}

export default App;
