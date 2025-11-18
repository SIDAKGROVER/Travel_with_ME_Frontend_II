import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

function PaymentPage(){
  const { state } = useLocation();
  const navigate = useNavigate();
  const booking = state?.booking || null;

  if(!booking){
    return (
      <div style={{padding:20}}>
        <h2>No booking found</h2>
        <p>Please go back and start a booking.</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  const handlePay = () => {
    // For now simulate payment success and save to localStorage
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');
    const paymentRecord = {
      id: Date.now(),
      bookingId: booking.id,
      amount: booking.priceValue || 0,
      currency: 'INR',
      status: 'SUCCESS',
      createdAt: new Date().toISOString()
    };
    payments.push(paymentRecord);
    localStorage.setItem('payments', JSON.stringify(payments));
    // mark booking as paid
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    navigate('/payment-success', { state: { payment: paymentRecord, booking } });
  };

  return (
    <div className="payment-page container">
      <h2>Payment</h2>
      <div className="payment-summary">
        <h3>{booking.hotelName}</h3>
        <p>Guest: {booking.name}</p>
        <p>Check-in: {booking.checkIn} | Check-out: {booking.checkOut}</p>
        <p>Guests: {booking.guests}</p>
        <p className="amount">Amount: {booking.price || '₹0'}</p>
      </div>

      <div className="payment-actions">
        <button className="pay-btn" onClick={handlePay}>Pay Now</button>
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default PaymentPage;
