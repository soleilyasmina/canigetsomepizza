import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const Map = (props) => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 40.7290884,
    longitude: -74.0037228,
    zoom: 14
  });

  return (
    <ReactMapGL 
      {...viewport}
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle='mapbox://styles/soleilyasmina/cjo5xf4eq100u2snxhz55utxx'
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
    </ReactMapGL>
  )
}

export default Map;
