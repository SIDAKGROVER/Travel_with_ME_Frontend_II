// src/pages/HomePage.jsx
import React from 'react';
import Content from '../components/Content';
import PromoBox from '../components/PromoBox';
import SectionHeading from '../components/SectionHeading';
import DestinationSlider from '../components/DestinationSlider';
import TourList from '../components/TourList';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';
import '../App.css';

// Mock data for the components
const destinations = [
  { id: 1, name: 'Kerala', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=464&h=500' },
  { id: 2, name: 'Manali', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=464&h=500' },
  { id: 3, name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=464&h=500' },
  { id: 4, name: 'Jaipur', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=464&h=500' },
  { 
    id: 5, 
    name: 'Rishikesh', 
    // using Unsplash source query so a valid image is returned for the city
    image: 'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Yoga Capital of the World'
  },
  { 
    id: 6, 
    name: 'Varanasi', 
    image: 'https://images.unsplash.com/photo-1442570468985-f63ed5de9086?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Spiritual Capital of India'
  },
  { 
    id: 7, 
    name: 'Leh Ladakh', 
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=464&h=500',
    description: 'Land of High Passes'
  },
  { 
    id: 8, 
    name: 'Udaipur', 
    image: 'https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    description: 'City of Lakes'
  }
];

const tours = [
  { 
    id: 1, 
    image: 'https://images.unsplash.com/photo-1442570468985-f63ed5de9086?auto=format&fit=crop&q=80&w=600&h=400', 
    price: '25,000', 
    rating: 5, 
    title: 'Explore the Majestic Himalayas', 
    location: 'Shimla, Himachal Pradesh' 
  },
  { 
    id: 2, 
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=600&h=400', 
    price: '32,000', 
    rating: 4.5, 
    title: 'Beaches and Backwaters of Kerala', 
    location: 'Alleppey, Kerala' 
  },
  { 
    id: 3, 
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600&h=400', 
    price: '45,000', 
    rating: 5, 
    title: 'Royal Rajasthan Heritage Tour', 
    location: 'Jaipur-Udaipur-Jodhpur' 
  },
  { 
    id: 4, 
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&q=80&w=600&h=400', 
    price: '28,000', 
    rating: 4.8, 
    title: 'Spiritual Varanasi Experience', 
    location: 'Varanasi, Uttar Pradesh' 
  },
  { 
    id: 5, 
    image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=600&h=400', 
    price: '52,000', 
    rating: 4.9, 
    title: 'Adventure in Ladakh', 
    location: 'Leh-Ladakh' 
  },
  { 
    id: 6, 
    image: 'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?auto=format&fit=crop&q=80&w=600&h=400', 
    price: '35,000', 
    rating: 4.7, 
    title: 'Goan Beach Paradise', 
    location: 'North & South Goa' 
  }
];

function HomePage() {
  return (
    <>
      <main>
        <Content />
        <div className="container">
          <PromoBox />
          <SectionHeading 
            title="Best Selling Destinations" 
          />
        </div>
        <DestinationSlider destinations={destinations} />
        <div className="container">
          <SectionHeading 
            title="Featured Tours" 
            subtitle="Most Popular Tours"
          />
          <TourList tours={tours} />
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

export default HomePage;