import React from 'react';

const Rating = ({ rating }) => {
  const ratings = [];
  for (let i = 0; i < parseInt(rating); i++) {
    ratings.push(<i className="fas fa-star" />)
  }
  if (rating % 1 !== 0) {
    ratings.push(<i className="fas fa-star-half" />)
  }
  return (
    ratings 
  )
}

export default Rating;
