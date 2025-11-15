import React, { useState } from 'react';
import './Content.css';

// Mock search results data
const mockResults = {
  hotels: [
    { 
      id: 1, 
      name: 'The Taj Palace', 
      location: 'New Delhi', 
      price: '₹18,500/night', 
      rating: 4.9, 
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=200&h=150' 
    },
    { 
      id: 2, 
      name: 'The Oberoi Udaivilas', 
      location: 'Udaipur', 
      price: '₹32,000/night', 
      rating: 5.0, 
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=200&h=150' 
    },
    { 
      id: 3, 
      name: 'Rambagh Palace', 
      location: 'Jaipur', 
      price: '₹25,000/night', 
      rating: 4.8, 
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=200&h=150' 
    },
    { 
      id: 4, 
      name: 'Leela Palace', 
      location: 'Bengaluru', 
      price: '₹15,000/night', 
      rating: 4.7, 
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=200&h=150' 
    }
  ],
  flights: [
    { 
      id: 1, 
      from: 'Delhi', 
      to: 'Mumbai', 
      price: '₹5,500', 
      airline: 'IndiGo', 
      departure: '06:00 AM',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=200&h=150'
    },
    { 
      id: 2, 
      from: 'Mumbai', 
      to: 'Bangalore', 
      price: '₹4,800', 
      airline: 'Air India', 
      departure: '09:30 AM',
      logo: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=200&h=150'
    },
    { 
      id: 3, 
      from: 'Bangalore', 
      to: 'Goa', 
      price: '₹3,200', 
      airline: 'SpiceJet', 
      departure: '11:45 AM',
      logo: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=200&h=150'
    },
    { 
      id: 4, 
      from: 'Delhi', 
      to: 'Leh', 
      price: '₹7,800', 
      airline: 'Vistara', 
      departure: '05:30 AM',
      logo: 'https://images.unsplash.com/photo-1569629743-5871e32de3a8?auto=format&fit=crop&q=80&w=200&h=150'
    }
  ],
  activities: [
    { 
      id: 1, 
      name: 'Taj Mahal Sunrise Tour', 
      location: 'Agra', 
      price: '₹2,500', 
      rating: 4.9, 
      duration: '4 hours',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=200&h=150'
    },
    { 
      id: 2, 
      name: 'Varanasi Ganga Aarti', 
      location: 'Varanasi Ghats', 
      price: '₹1,800', 
      rating: 4.8, 
      duration: '2 hours',
      image: 'https://images.unsplash.com/photo-1561361058-c24c25c92ce3?auto=format&fit=crop&q=80&w=200&h=150'
    },
    { 
      id: 3, 
      name: 'Desert Safari', 
      location: 'Jaisalmer', 
      price: '₹3,500', 
      rating: 4.7, 
      duration: 'Full day',
      image: 'https://images.unsplash.com/photo-1624653722159-dd57231b20ce?auto=format&fit=crop&q=80&w=200&h=150'
    },
    { 
      id: 4, 
      name: 'Backwater Cruise', 
      location: 'Alleppey', 
      price: '₹4,000', 
      rating: 4.9, 
      duration: '6 hours',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=200&h=150'
    }
  ]
};

function Content() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  return (
    <section className="content-section">
      <div className="content-container">
        <div className="content-text">
          <h1>Discover Your Next Adventure</h1>
          <p>Find the perfect destination for your dream vacation</p>
        </div>
        
        <div className="search-container">
          <div className="search-tabs">
            <button 
              className={`tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <i className="fas fa-search"></i> Search All
            </button>
            <button 
              className={`tab ${activeTab === 'hotels' ? 'active' : ''}`}
              onClick={() => setActiveTab('hotels')}
            >
              <i className="fas fa-hotel"></i> Hotels
            </button>
            <button 
              className={`tab ${activeTab === 'activities' ? 'active' : ''}`}
              onClick={() => setActiveTab('activities')}
            >
              <i className="fas fa-hiking"></i> Things to Do
            </button>
            <button 
              className={`tab ${activeTab === 'restaurants' ? 'active' : ''}`}
              onClick={() => setActiveTab('restaurants')}
            >
              <i className="fas fa-utensils"></i> Restaurants
            </button>
            <button 
              className={`tab ${activeTab === 'flights' ? 'active' : ''}`}
              onClick={() => setActiveTab('flights')}
            >
              <i className="fas fa-plane"></i> Flights
            </button>
            <button 
              className={`tab ${activeTab === 'homes' ? 'active' : ''}`}
              onClick={() => setActiveTab('homes')}
            >
              <i className="fas fa-home"></i> Holiday Homes
            </button>
          </div>

          <form className="search-bar" onSubmit={(e) => {
              e.preventDefault();
              setShowResults(true);
            }}>
            <div className="search-input-container">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                placeholder={`Search ${activeTab === 'all' ? 'everything' : activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit">
              <i className="fas fa-search"></i>
              Search
            </button>
          </form>

          {showResults && (
            <div className="search-results">
              <div className="results-header">
                <h3>Search Results for "{searchQuery}"</h3>
                <button className="close-results" onClick={() => setShowResults(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="results-grid">
                {activeTab === 'hotels' && mockResults.hotels.map(hotel => (
                  <div key={hotel.id} className="result-card hotel-card">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://source.unsplash.com/200x150/?${encodeURIComponent(hotel.name)}`; }}
                    />
                    <div className="card-content">
                      <h4>{hotel.name}</h4>
                      <p><i className="fas fa-map-marker-alt"></i> {hotel.location}</p>
                      <div className="card-footer">
                        <span className="price">{hotel.price}</span>
                        <span className="rating"><i className="fas fa-star"></i> {hotel.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {activeTab === 'flights' && mockResults.flights.map(flight => (
                  <div key={flight.id} className="result-card flight-card">
                    <img
                      src={flight.logo}
                      alt={flight.airline}
                      className="flight-image"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://source.unsplash.com/200x150/?airplane,${encodeURIComponent(flight.airline)}`; }}
                    />
                    <div className="card-content">
                      <div className="flight-route">
                        <span>{flight.from}</span>
                        <i className="fas fa-plane"></i>
                        <span>{flight.to}</span>
                      </div>
                      <p><i className="fas fa-clock"></i> {flight.departure}</p>
                      <p><i className="fas fa-plane-departure"></i> {flight.airline}</p>
                      <div className="card-footer">
                        <span className="price">{flight.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {activeTab === 'activities' && mockResults.activities.map(activity => (
                  <div key={activity.id} className="result-card activity-card">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://source.unsplash.com/200x150/?${encodeURIComponent(activity.name)}`; }}
                    />
                    <div className="card-content">
                      <h4>{activity.name}</h4>
                      <p><i className="fas fa-map-marker-alt"></i> {activity.location}</p>
                      <p><i className="fas fa-clock"></i> {activity.duration}</p>
                      <div className="card-footer">
                        <span className="price">{activity.price}</span>
                        <span className="rating"><i className="fas fa-star"></i> {activity.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="featured-destinations">
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&q=80&w=300&h=200"
              alt="Mountains"
              loading="lazy"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://source.unsplash.com/300x200/?mountains'; }}
            />
            <h3>Mountains</h3>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=300&h=200"
              alt="Beaches"
              loading="lazy"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://source.unsplash.com/300x200/?beach'; }}
            />
            <h3>Beaches</h3>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=300&h=200"
              alt="Cities"
              loading="lazy"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://source.unsplash.com/300x200/?city'; }}
            />
            <h3>Cities</h3>
          </div>
          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=300&h=200"
              alt="Nature"
              loading="lazy"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://source.unsplash.com/300x200/?nature'; }}
            />
            <h3>Nature</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;