// src/components/PromoBox.jsx
import React from 'react';
import './PromoBox.css';

function PromoBox() {
  return (
    <section className="promo-box">
      <div className="promo-image">
        {/* Use an image from your assets or a URL */}
        <img src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&fit=crop&q=80&w=800&h=600" alt="Kayaking" />
        <span className="promo-tag">@David K</span>
      </div>
      <div className="promo-content">
        <h2>Find things to do for everything you're into</h2>
        <p>Browse 400,000+ experiences and book with us.</p>
        <button>Book now</button>
      </div>
    </section>
  );
}

export default PromoBox;