import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import Pizza from './Pizza';

const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 40.7290884,
    longitude: -74.0037228,
    zoom: 15,
  });

  const [popup, setPopup] = useState({
    selected: false,
    pizza: null
  });

  const [dark, setDark] = useState(true);

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
      mapStyle={dark ?
          'mapbox://styles/soleilyasmina/cjo5wyen10ze12smm9gn7fys7' :
      'mapbox://styles/soleilyasmina/cjo5wigd70z4k2rn0tahsvkqv' }
    >
      { props.pizzas.map((pizza, i) => {
        return (
          <Marker 
            key={i}
            latitude={parseFloat(pizza.coordinates.latitude)}
            longitude={parseFloat(pizza.coordinates.longitude)}
          >
            <i
              className={`fas fa-pizza-slice ${dark ? 'dark' : 'light'}`}
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
          className='popup'
        >
          <Pizza className='pizza' pizza={popup.pizza} />
      </Popup>
      }

      <GeolocateControl
        trackUserLocation={true}
        onViewportChange={(newViewport) => handleGeolocation(newViewport)}
        className='geolocate-control'
      />
      <div className={dark ? 'dark-mode' : 'light-mode'}>
        <i onClick={() => setDark(!dark)} className={`fas mode ${dark ? 'fa-moon dark' : 'fa-sun light'}`}></i>
      </div>
    </ReactMapGL>
  )
}

export default Map;
