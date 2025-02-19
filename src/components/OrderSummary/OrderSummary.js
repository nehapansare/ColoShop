import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./OrderSummary.css";

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize } = location.state || {};

  if (!product) {
    return <div className="error">No product details available.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("📝 Details Submitted Successfully!");
  };

  return (
    <div className="order-summary-wrapper">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Order Summary Section */}
      <div className="order-summary-container">
        <h2>🛒 Order Summary</h2>
        
        {/* Small Product Image */}
        <img src={product.images.main} alt={product.title} className="product-image-small" />

        <p><strong>Product:</strong> {product.title}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Selected Size:</strong> {selectedSize}</p>

        <button className="confirm-order" onClick={() => alert("Order Confirmed ✅")}>
          Confirm Order
        </button>
        <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <h2>📋 Shipping Details</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Apartment / Near By" required />
          <input type="text" placeholder="Pincode" required />
          <input type="text" placeholder="Road" required />
          <input type="text" placeholder="City" required />
          <button type="submit" className="submit-form">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default OrderSummary;
