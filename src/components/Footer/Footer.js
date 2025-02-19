import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="your-logo-url-here" alt="Fashion World Logo" className="footer-logo-img" />
        </div>

        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">We are a leading fashion platform showcasing top designers. Explore the best trends and timeless creations.</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/designers">Designers</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="footer-social">
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Fashion World. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
