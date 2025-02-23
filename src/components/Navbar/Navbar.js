import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

      {/* Login/Logout Box */}
      <div className='login-box'>
        {isLoggedIn ? (
          <p onClick={handleLogout} >Logout</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
