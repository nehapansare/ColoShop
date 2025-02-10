import React from "react";
import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Name */}
        <h2 className="brand-name">COLOSHOP</h2>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Copyright Text */}
        <p className="copyright">© 2024 COLOSHOP. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
