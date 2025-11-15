import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPages.css';
import bcrypt from 'bcryptjs';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  if (formData.password !== formData.confirmPassword) {
    setError('Passwords do not match');
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || 'Signup failed');
      return;
    }

    // Persist minimal user info so the app knows someone is signed in
    if (data && data.user) {
      localStorage.setItem('currentUser', JSON.stringify(data.user));
    }

    navigate('/');
  } catch (err) {
    console.error(err);
    setError('Backend not running. Start Node server.');
  }
};


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join us on your journey</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>
          
          <button type="submit" className="auth-button">Create Account</button>
        </form>
        
        <p className="auth-footer">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;