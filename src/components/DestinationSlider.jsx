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
              src={dest.image || `https://source.unsplash.com/464x500/?${encodeURIComponent(dest.name)}`}
              alt={dest.name}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                // simpler query without punctuation to improve reliability
                const query = encodeURIComponent(dest.name.replace(/[,\/]/g, ''));
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