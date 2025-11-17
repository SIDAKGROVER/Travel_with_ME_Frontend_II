import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TourList from '../components/TourList';
import { tours } from '../data/tours';

function TripsPage() {
  return (
    <div className="page-container">
      <SectionHeading
        title="Available Trips"
        subtitle="Find your perfect adventure"
      />
      <div className="container">
        <TourList tours={tours} />
      </div>
    </div>
  );
}

export default TripsPage;