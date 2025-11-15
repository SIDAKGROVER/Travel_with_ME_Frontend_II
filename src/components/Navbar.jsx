// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar container">
      <Link to="/" className="nav-logo">
        <i className="fas fa-suitcase-rolling"></i>
        <span>TRAVEL WITH ME</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/discover" className={location.pathname === '/discover' ? 'active' : ''}>
            Discover
          </Link>
        </li>
        <li>
          <Link to="/trips" className={location.pathname === '/trips' ? 'active' : ''}>
            Trips
          </Link>
        </li>
        <li>
          <Link to="/reviews" className={location.pathname === '/reviews' ? 'active' : ''}>
            Reviews
          </Link>
        </li>
      </ul>
      <div className="nav-auth">
        {currentUser ? (
          <div className="user-menu">
            <span className="user-name">Hello, {currentUser.name}</span>
            <button onClick={handleLogout} className="nav-logout">Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="nav-login">Log in</Link>
            <Link to="/signup" className="nav-signup">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;