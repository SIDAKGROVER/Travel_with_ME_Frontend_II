import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentSuccessPage(){
  const { state } = useLocation();
  const navigate = useNavigate();
  const payment = state?.payment;
  const booking = state?.booking;

  return (
    <div style={{padding:20}}>
      <h2>Payment Successful</h2>
      {payment && (
        <div>
          <p>Payment ID: {payment.id}</p>
          <p>Amount: {payment.amount} {payment.currency}</p>
        </div>
      )}
      {booking && (
        <div>
          <p>Booking for: {booking.hotelName}</p>
          <p>Guest: {booking.name}</p>
        </div>
      )}
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}

export default PaymentSuccessPage;
