// src/components/StarRating.jsx
import React from 'react';

function StarRating({ rating }) {
  const totalStars = 5;
  
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starClass = index < rating ? 'fas fa-star filled' : 'far fa-star';
        return <i key={index} className={starClass}></i>;
      })}
    </div>
  );
}

export default StarRating;