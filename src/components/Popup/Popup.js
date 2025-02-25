// src/components/CartSlider/PaymentPopup.jsx (or wherever your Popup component is)
import React from "react";
import "./Popup.css";

const Popup = ({
  isOpen,
  onClose,
  paymentDetails,
  handleInputChange,
  handlePaymentSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h2>Payment Details</h2>
        <form onSubmit={handlePaymentSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={paymentDetails.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={paymentDetails.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />

          <label>Address:</label>
          <textarea
            name="address"
            value={paymentDetails.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            required
          ></textarea>

          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={paymentDetails.pincode}
            onChange={handleInputChange}
            placeholder="Enter your pincode"
            required
          />

          <button type="submit">Proceed to Payment</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Popup;
