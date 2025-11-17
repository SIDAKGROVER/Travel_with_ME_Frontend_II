// src/pages/HomePage.jsx
import React from 'react';
import Content from '../components/Content';
import PromoBox from '../components/PromoBox';
import SectionHeading from '../components/SectionHeading';
import DestinationSlider from '../components/DestinationSlider';
import TourList from '../components/TourList';
import { tours } from '../data/tours';
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