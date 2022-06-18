import { useState, useEffect } from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import "../styles/map.css"

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({
  fetchedGeoGlobal
}) => {

  const [geoJsonGlobal, setGeoJsonGlobal] = useState([])

  const [viewPort, setViewPort] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  useEffect(() => {
    if(fetchedGeoGlobal) {
      setGeoJsonGlobal(fetchedGeoGlobal)
    }
    return () => {
      setGeoJsonGlobal([])
    }
  }, [fetchedGeoGlobal])

  const layerStyle1 =    {
    id: 'isoLayer',
    type: 'fill',
    paint: {
      'fill-color': '#5a3fc0',
      'fill-opacity': 0.3
    }
  }

  const layerStyle2 =    {
    id: 'isoLayer',
    type: 'fill',
    paint: {
      'fill-color': '#F47C7C',
      'fill-opacity': 0.3
    }
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
        {geoJsonGlobal &&
          <>
            <Source type="geojson" data={geoJsonGlobal[0]}>
                <Layer {...layerStyle1} />
            </Source>

            <Source type="geojson" data={geoJsonGlobal[1]}>
                <Layer {...layerStyle2} />
            </Source>
          </>
        }
      </Map>
    </div>
  )
}

export default MapBox
