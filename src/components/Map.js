import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';

const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 40.7290884,
    longitude: -74.0037228,
    zoom: 14,
  });

  const handleGeolocation = (newViewport) => {
    props.setLocation({
      lat: newViewport.latitude,
      lon: newViewport.longitude
    });
    setViewport(newViewport);
  }

  return (
    <ReactMapGL 
      {...viewport}
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle='mapbox://styles/soleilyasmina/cjo5wyen10ze12smm9gn7fys7'
    >
      { props.pizzas.map((pizza, i) => {
        return (
          <Marker 
            key={i}
            latitude={parseFloat(pizza.coordinates.latitude)}
            longitude={parseFloat(pizza.coordinates.longitude)}
            offsetTop={-20}
            offsetLeft={10}
          >
            <i className={'fas fa-pizza-slice'} />
          </Marker>
        )
      }) }
      <GeolocateControl
        trackUserLocation={true}
        onViewportChange={(newViewport) => handleGeolocation(newViewport)}
        className='geolocate-control'
      />
    </ReactMapGL>
  )
}

export default Map;
