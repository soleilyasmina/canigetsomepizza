import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import './App.css';
import { getPizzas } from './services/yelp';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [location, setLocation] = useState({
    lat: 40.7290884,
    lon: -74.0037228
  });

  useEffect(() => {
    const getPizzasCb = async () => {
      setPizzas(await getPizzas(location.lat, location.lon));    
    };
    getPizzasCb();
  }, [location]);

  return (
    <div className="App">
      <Map
        pizzas={pizzas}
        setLocation={setLocation}
      />
    </div>
  );
}

export default App;
