import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

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
    />
  )
}

export default Map;
