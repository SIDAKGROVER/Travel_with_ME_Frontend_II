import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import '../components/TourList.css';
import './HotelsPage.css';
import { useNavigate } from 'react-router-dom';

const HotelsPage = () => {
  const [selectedState, setSelectedState] = useState('all');

  const hotels = [
    {
      id: 1,
      name: "Train Lake Palace",
      state: "Shimla",
      city: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1442570468985-f63ed5de9086?auto=format&fit=crop&q=80&w=800&h=600",
      price: "₹25,000",
      rating: 5
    },
    {
      id: 2,
      name: "Golden Temple",
      state: "Amritsar",
      city: "Punjab",
      image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800&h=600",
      price: "₹18,000",
      rating: 4.8
    },
    {
      id: 3,
      name: "Taj Mahal Palace",
      state: "Agra",
      city: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800&h=600",
      price: "₹30,000",
      rating: 4.9
    },
    {
      id: 4,
      name: "The Leela Palace",
      state: "Karnataka",
      city: "Bangalore",
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&q=80&w=800&h=600",
      price: "₹20,000",
      rating: 4.7
    },
    {
      id: 5,
      name: "Wildflower Hall",
      state: "Himachal Pradesh",
      city: "Manali",
      image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=800&h=600",
      price: "₹22,000",
      rating: 4.8
    },
    {
      id: 6,
      name: "Rambagh Palace",
      state: "Rajasthan",
      city: "Jaipur",
      image: "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?auto=format&fit=crop&q=80&w=800&h=600",
      price: "₹28,000",
      rating: 4.9
    }
  ];

  const states = [...new Set(hotels.map(hotel => hotel.state))];

  const [bookingHotel, setBookingHotel] = useState(null);
  const [bookingData, setBookingData] = useState({ name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: 1 });

  function openBooking(hotel) {
    setBookingHotel(hotel);
    setBookingData({ name: '', email: '', phone: '', checkIn: '', checkOut: '', guests: 1 });
  }

  function handleBookingChange(e) {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  }

  const navigate = useNavigate();

  function handleBookingSubmit(e) {
    e.preventDefault();
    const booking = {
      id: Date.now(),
      hotelId: bookingHotel.id,
      hotelName: bookingHotel.name,
      price: bookingHotel.price,
      priceValue: parseInt(String(bookingHotel.price).replace(/[^0-9]/g, '')) || 0,
      ...bookingData
    };
    // navigate to payment page with booking details
    navigate('/payment', { state: { booking } });
  }

  return (
    <div className="tours-container">
      <SectionHeading 
        subtitle="Luxury Stays" 
        title="Premium Hotels Across India" 
      />
      
      <div className="filter-container">
        <select 
          value={selectedState} 
          onChange={(e) => setSelectedState(e.target.value)}
          className="state-filter"
        >
          <option value="all">All States</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className="tours-grid">
        {hotels
          .filter(hotel => selectedState === 'all' || hotel.state === selectedState)
          .map(hotel => (
            <div key={hotel.id} className="tour-card">
              <img
                src={hotel.image}
                alt={hotel.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  // inline SVG placeholder (visible even if remote images fail)
                  e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23888" font-family="Arial,Helvetica,sans-serif" font-size="24">Image not available</text></svg>';
                }}
              />
              <div className="tour-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.city}, {hotel.state}</p>
                <div className="tour-footer">
                  <span className="price">From {hotel.price}/night</span>
                  <div className="rating">
                    <span>★</span>
                    <span>{hotel.rating}</span>
                  </div>
                </div>
                <button className="book-btn" onClick={() => openBooking(hotel)}>Book Now</button>
              </div>
            </div>
          ))}
      </div>

      {bookingHotel && (
        <div className="booking-modal">
          <div className="booking-panel">
            <button className="close-btn" onClick={() => setBookingHotel(null)}>×</button>
            <h2>Book: {bookingHotel.name}</h2>
            <form onSubmit={handleBookingSubmit} className="booking-form">
              <label>
                Full name
                <input name="name" value={bookingData.name} onChange={handleBookingChange} required />
              </label>
              <label>
                Email
                <input name="email" type="email" value={bookingData.email} onChange={handleBookingChange} required />
              </label>
              <label>
                Phone
                <input name="phone" value={bookingData.phone} onChange={handleBookingChange} required />
              </label>
              <label>
                Check-in
                <input name="checkIn" type="date" value={bookingData.checkIn} onChange={handleBookingChange} required />
              </label>
              <label>
                Check-out
                <input name="checkOut" type="date" value={bookingData.checkOut} onChange={handleBookingChange} required />
              </label>
              <label>
                Guests
                <input name="guests" type="number" min="1" value={bookingData.guests} onChange={handleBookingChange} required />
              </label>
              <div className="booking-actions">
                <button type="submit" className="confirm-btn">Confirm Booking</button>
                <button type="button" className="cancel-btn" onClick={() => setBookingHotel(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelsPage;