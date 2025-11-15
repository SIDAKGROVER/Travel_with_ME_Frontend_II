// src/components/DestinationSlider.jsx
import React, { useRef } from 'react';
import './DestinationSlider.css';

function DestinationSlider({ destinations }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={() => scroll('left')}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="slider-track" ref={sliderRef}>
        {destinations.map(dest => (
          <div className="destination-card" key={dest.id}>
            <img
              src={dest.image}
              alt={dest.name}
              loading="lazy"
              onError={(e) => {
                // fallback to Unsplash query by name if original URL fails
                e.currentTarget.onerror = null;
                const query = encodeURIComponent(dest.name + ", india");
                e.currentTarget.src = `https://source.unsplash.com/464x500/?${query}`;
              }}
            />
            <h3>{dest.name}</h3>
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={() => scroll('right')}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default DestinationSlider;