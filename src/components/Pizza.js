import React from 'react';
import Rating from './Rating';

const Pizza = ({ pizza }) => {
  return (
    <>
      <img 
        alt={pizza.name}
        className='pizza-image'
        src={pizza.image_url}
      />
      <h4 className='pizza-name'>{ pizza.name }</h4>
      <p className='pizza-price'>{ pizza.price }</p>
      <div>
        <Rating rating={pizza.rating} />
      </div>
    </>
  )
}

export default Pizza;
