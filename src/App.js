import React, { useState, useEffect } from 'react';
import './App.css';
import { getPizzas } from './services/yelp';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzasCb = async () => {
      setPizzas(await getPizzas());    
    };
    getPizzasCb();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
