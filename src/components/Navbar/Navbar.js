import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      {/* Brand Name */}
      <h1>
        <span className='brand-name1'>COLO</span>
        <span className='brand-name2'>SHOP</span>
      </h1>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/designer">Designer</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Login Box */}
      <div className='login-box'>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
