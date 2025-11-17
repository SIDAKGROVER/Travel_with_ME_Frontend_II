// src/components/TourList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import './TourList.css';

function TourList({ tours = [] }) {
  return (
    <div className="tour-list">
      {tours.map(tour => (
        <div className="tour-card" key={tour.id}>
          <img
            src={tour.image}
            alt={tour.location || tour.title}
            className="tour-image"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              const q = encodeURIComponent(tour.location || tour.title || 'travel');
              e.currentTarget.src = `https://source.unsplash.com/600x400/?${q}`;
            }}
          />
          <div className="tour-content">
            <div className="tour-header">
              <span className="tour-price">From ₹{tour.price}</span>
              <StarRating rating={tour.rating} />
            </div>
            <p className="tour-title">{tour.title}</p>
            <p className="tour-location">{tour.location}</p>
            <div className="tour-item-btn">
              <Link to={`/hotels?state=${tour.state}`}>
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourList;