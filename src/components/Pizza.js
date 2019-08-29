import React from 'react';

const Pizza = ({ pizza }) => {
  return (
    <>
      <img 
        src={pizza.image_url}
        className='pizza-image'
      />
      <h4 className='pizza-name'>{ pizza.name }</h4>
    </>
  )
}

export default Pizza;
