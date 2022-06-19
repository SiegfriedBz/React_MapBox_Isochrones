import { useState, useEffect } from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import "../styles/map.css"

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({
  fetchedGeoGlobal
}) => {

  const [geoJsonGlobal, setGeoJsonGlobal] = useState({})

  const [viewPort, setViewPort] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  useEffect(() => {
    if(typeof fetchedGeoGlobal[0] !== 'undefined')  {
      setGeoJsonGlobal({
        'type': 'FeatureCollection',
        'features':  [
          {...fetchedGeoGlobal[0].features[0], user: 'user1'},
          {...fetchedGeoGlobal[1].features[0], user: 'user2'},
        ]
      })
    }
    return () => {
      setGeoJsonGlobal({})
    }
  }, [fetchedGeoGlobal])


  const layerStyle1 =    {
    id: 'user1',
    type: 'fill',
    paint: {
      'fill-color': '#5a3fc0',
      'fill-opacity': 0.3
    },
    // filter: ['==', 'user', 'user1']
  }

  const layerStyle2 =    {
    id: 'user2',
    type: 'fill',
    paint: {
      'fill-color': '#F47C7C',
      'fill-opacity': 0.3
    },
    // filter: ['==', '$user', 'user2']
  }

  return (
    <div className="map-container">
      <Map
        {...viewPort}
        onMove={prev => setViewPort(prev.viewPort)}
        onViewportChange={viewPort => setViewPort(viewPort)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {typeof fetchedGeoGlobal[0] !== 'undefined' &&
          <>
            <Source id="users" type="geojson" data={geoJsonGlobal}>
                <Layer {...layerStyle2} />
            </Source>
          </>
        }
      </Map>
    </div>
  )




}

export default MapBox
