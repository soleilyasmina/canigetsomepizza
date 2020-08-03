import React from 'react';
import Rating from './Rating';

const Pizza = ({ pizza }) => {
  return (
    <div className='inner-popup' style={{ backgroundImage: `url(${pizza.image_url})` }}>
      <div className='popup-content'>
        <h4 className='pizza-name'>{ pizza.name }</h4>
        <p className='pizza-price'>{ pizza.price }</p>
        <div className='ratings'>
          <Rating rating={pizza.rating} />
        </div>
      </div>
    </div>
  )
}

export default Pizza;
