import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import '../components/TourList.css';

const HotelsPage = () => {
  const [selectedState, setSelectedState] = useState('all');

  const hotels = [
    {
      id: 1,
      name: "Taj Lake Palace",
      state: "Rajasthan",
      city: "Udaipur",
      image: "https://source.unsplash.com/464x500/?taj,lake,palace,udaipur",
      price: "₹25,000",
      rating: 5
    },
    {
      id: 2,
      name: "The Oberoi Cecil",
      state: "Himachal Pradesh",
      city: "Shimla",
      image: "https://source.unsplash.com/464x500/?oberoi,hotel,shimla",
      price: "₹18,000",
      rating: 4.8
    },
    {
      id: 3,
      name: "Taj Mahal Palace",
      state: "Maharashtra",
      city: "Mumbai",
      image: "https://source.unsplash.com/464x500/?taj,mahal,palace,mumbai",
      price: "₹30,000",
      rating: 4.9
    },
    {
      id: 4,
      name: "The Leela Palace",
      state: "Karnataka",
      city: "Bangalore",
      image: "https://source.unsplash.com/464x500/?leela,palace,bangalore",
      price: "₹20,000",
      rating: 4.7
    },
    {
      id: 5,
      name: "Wildflower Hall",
      state: "Himachal Pradesh",
      city: "Shimla",
      image: "https://source.unsplash.com/464x500/?wildflower,hall,shimla",
      price: "₹22,000",
      rating: 4.8
    },
    {
      id: 6,
      name: "Rambagh Palace",
      state: "Rajasthan",
      city: "Jaipur",
      image: "https://source.unsplash.com/464x500/?rambagh,palace,jaipur",
      price: "₹28,000",
      rating: 4.9
    }
  ];

  const states = [...new Set(hotels.map(hotel => hotel.state))];

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
              <img src={hotel.image} alt={hotel.name} />
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
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HotelsPage;