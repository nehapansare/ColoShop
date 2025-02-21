import React from "react";
import "./Contact.css"; // Import your CSS file
import backgroundImage from "../../img/1.jpg"; // Adjust the path accordingly
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Background image element */}
      <img src={backgroundImage} alt="Background" className="background-image" />
      
      {/* Contact container that displays over the background image */}
      <Navbar/>
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-text">We'd love to hear from you! Reach out to us anytime.</p>

        <form className="contact-form">
          <label className="contact-label">Name:</label>
          <input type="text" placeholder="Your Name" className="contact-input" />

          <label className="contact-label">Email:</label>
          <input type="email" placeholder="Your Email" className="contact-input" />

          <label className="contact-label">Message:</label>
          <textarea placeholder="Your Message" className="contact-textarea"></textarea>

          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {/* Contact Information Section */}
        <div className="contact-info">
          <div className="info-box address-box">
            <h3>📍 Address</h3>
            <p>123 Virtual Lab Street, Science City</p>
          </div>
          <div className="info-box location-box">
            <h3>🌎 Location</h3>
            <p>New York, USA</p>
          </div>
          <div className="info-box phone-box">
            <h3>📞 Phone</h3>
            <p>+1 234 567 890</p>
          </div>
        </div>
       
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
