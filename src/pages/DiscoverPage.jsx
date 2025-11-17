import React from 'react';
import SectionHeading from '../components/SectionHeading';
import DestinationSlider from '../components/DestinationSlider';
import './DiscoverPage.css';
import { destinations } from '../data/destinations';

function DiscoverPage() {
  return (
    <div className="page-container discover-page">
      <SectionHeading
        title="Discover Amazing Destinations"
        subtitle="Explore our curated collection of breathtaking locations"
      />

      <div className="discover-intro">
        <p>
          Browse hand-picked destinations, with photos and short info to help you
          choose your next getaway. Click any destination to view related trips and
          hotels.
        </p>
      </div>

      <DestinationSlider destinations={destinations} />
    </div>
  );
}

export default DiscoverPage;