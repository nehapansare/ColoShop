import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    toast.success('Logged out successfully!');
    navigate('/login'); // Redirect to Login
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      {/* Brand Name */}
      <h1>
        <span className="brand-name1">COLO</span>
        <span className="brand-name2">SHOP</span>
      </h1>

      {/* Hamburger Menu Icon (visible on small screens) */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        <Link to="/designer" onClick={() => setIsMenuOpen(false)}>Designer</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
      </div>

      {/* Login/Logout Box */}
      <div className="login-box">
        {isLoggedIn ? (
          <p onClick={handleLogout}>Logout</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
