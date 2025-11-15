import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TourList from '../components/TourList';

function TripsPage() {
  return (
    <div className="page-container">
      <SectionHeading
        title="Available Trips"
        subtitle="Find your perfect adventure"
      />
      <TourList />
    </div>
  );
}

export default TripsPage;