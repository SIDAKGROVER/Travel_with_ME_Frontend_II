import React from 'react';
import SectionHeading from '../components/SectionHeading';
import DestinationSlider from '../components/DestinationSlider';
import './DiscoverPage.css';

const sampleDestinations = [
  { id: 1, name: 'Goa', image: 'https://source.unsplash.com/464x500/?goa,beach' },
  { id: 2, name: 'Manali', image: 'https://source.unsplash.com/464x500/?manali,mountains' },
  { id: 3, name: 'Jaipur', image: 'https://source.unsplash.com/464x500/?jaipur,india' },
  { id: 4, name: 'Kerala', image: 'https://source.unsplash.com/464x500/?kerala,backwaters' },
  { id: 5, name: 'Rishikesh', image: 'https://source.unsplash.com/464x500/?rishikesh,river' },
];

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

      <DestinationSlider destinations={sampleDestinations} />
    </div>
  );
}

export default DiscoverPage;