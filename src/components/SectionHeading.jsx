// src/components/SectionHeading.jsx
import React from 'react';
import './SectionHeading.css';

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;