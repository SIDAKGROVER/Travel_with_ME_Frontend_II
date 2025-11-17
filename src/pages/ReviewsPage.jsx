import React from 'react';
import SectionHeading from '../components/SectionHeading';
import StarRating from '../components/StarRating';
import './ReviewsPage.css';

const sampleReviews = [
  {
    id: 1,
    name: 'Anjali',
    rating: 5,
    comment: 'Wonderful experience — guides were friendly and hotels were great!',
    date: '2025-07-12'
  },
  {
    id: 2,
    name: 'Rohit',
    rating: 4,
    comment: 'Trip was well organized. A couple of schedule hiccups but overall excellent.',
    date: '2025-06-01'
  },
  {
    id: 3,
    name: 'Priya',
    rating: 5,
    comment: 'Amazing local food and breathtaking views. Highly recommend!',
    date: '2025-05-22'
  }
];

function ReviewsPage() {
  return (
    <div className="page-container reviews-page">
      <SectionHeading
        title="Traveler Reviews"
        subtitle="Read what our happy customers say about their experiences"
      />

      <div className="reviews-list">
        {sampleReviews.map(r => (
          <div className="review-card" key={r.id}>
            <div className="review-header">
              <strong className="reviewer-name">{r.name}</strong>
              <StarRating rating={r.rating} />
            </div>
            <p className="review-comment">{r.comment}</p>
            <div className="review-date">{new Date(r.date).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsPage;