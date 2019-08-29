import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';

const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 40.7290884,
    longitude: -74.0037228,
    zoom: 14,
  });

  const [popup, setPopup] = useState({
    selected: false,
    pizza: null
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
          >
            <i
              className={'fas fa-pizza-slice'}
              onClick={() => setPopup({
                pizza: pizza,
                selected: true
              })}
            />
          </Marker>
        )
      }) }

      { popup.selected &&
        <Popup
          latitude={parseFloat(popup.pizza.coordinates.latitude)}
          longitude={parseFloat(popup.pizza.coordinates.longitude)}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setPopup({ selected: false })}
        >
      <h4>A single pizza!</h4> 
      </Popup>
      }

      <GeolocateControl
        trackUserLocation={true}
        onViewportChange={(newViewport) => handleGeolocation(newViewport)}
        className='geolocate-control'
      />
    </ReactMapGL>
  )
}

export default Map;
