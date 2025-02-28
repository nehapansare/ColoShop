import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./OrderSummary.css";

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  // Added 'quantity' here along with product and selectedSize
  const { product, selectedSize, quantity } = location.state || {};
  const [animateForm, setAnimateForm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    apartment: "",
    pincode: "",
    road: "",
    city: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setAnimateForm(true), 300);
  }, []);

  const isFormFilled = Object.values(formData).every((value) => value.trim() !== "");

  if (!product) {
    return (
      <div className="error">
        <div className="error-icon">❌</div>
        <h3>No product details available.</h3>
        <p>Please go back and select a product first.</p>
        <button className="go-back error-back" onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </div>
    );
  }

  const validateForm = () => {
    const errors = {};
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid 10-digit phone number";
    }
    if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = "Please enter a valid 6-digit pincode";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing in a field with error
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formElement = e.target;
      formElement.classList.add("form-submitted");
      
      setTimeout(() => {
        toast.success("📝 Details Submitted Successfully!", {
          icon: "👍",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          duration: 4000,
        });
        formElement.classList.remove("form-submitted");
      }, 500);
    }
  };

  const handleConfirmOrder = () => {
    if (!isFormFilled) {
      toast.error("⚠️ Please fill all form fields", {
        icon: "🔥",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    
    if (!validateForm()) {
      toast.error("⚠️ Please fix form errors", {
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    
    setShowModal(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    const modalElement = document.querySelector(".modal-content");
    modalElement.classList.add("modal-exit");
    
    setTimeout(() => {
      setShowModal(false);
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }, 300);
  };

  const handleContinuePayment = () => {
    navigate("/payment"); // Change "/payment" to your actual payment route
  };
  const numericPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));

  return (
    <div className="order-summary-wrapper">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Order Summary Section */}
      <div className={`order-summary-container ${animateForm ? "animate-in" : ""}`}>
        <h2>
          <span className="icon-wrapper">
            <span className="icon">🛒</span>
          </span>
          Order Summary
        </h2>

        <div className="product-image-container">
          <img 
            src={product.images.main} 
            alt={product.title} 
            className="product-image-small"
            onMouseOver={(e) => e.target.classList.add("image-hover")}
            onMouseOut={(e) => e.target.classList.remove("image-hover")}
          />
          <div className="image-overlay">
            <button 
              className="order-btn"
              onClick={() => navigate(-1)}
            >
              <span>View Details</span>
            </button>
          </div>
        </div>

        <div className="product-details">
          <p className="product-name"><strong>Product:</strong> {product.title}</p>
          <p className="product-price">
            <strong>Price:</strong> <span className="price-tag">₹{product.price}</span>
          </p>
          <p className="selected-size">
            <strong>Selected Size:</strong> <span className="size-tag">{selectedSize}</span>
          </p>
          {/* Added quantity display */}
          <p className="product-quantity">
            <strong>Quantity:</strong> {quantity}
          </p>
          {/* Optionally, add a total price calculation */}
          <p className="total-price">
    <strong>Total:</strong> ₹{numericPrice * quantity}
  </p>

          
          <div className="order-actions">
            <button 
              className="confirm-order" 
              onClick={handleConfirmOrder}
            >
              <span className="btn-text">Confirm Order</span>
              <span className="btn-icon">✓</span>
            </button>
            
            <button 
              className="go-back" 
              onClick={() => navigate(-1)}
            >
              <span className="btn-text">Edit Selection</span>
              <span className="btn-icon">←</span>
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className={`form-container ${animateForm ? "animate-in delayed" : ""}`}>
        <h2>
          <span className="icon-wrapper">
            <span className="icon">📋</span>
          </span>
          Shipping Details
        </h2>
        
        <form onSubmit={handleSubmit} className="shipping-form">
          <div className="input-group">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              required 
              onChange={handleChange}
              className={formData.firstName ? "has-value" : ""}
            />
            <span className="input-focus-effect"></span>
            <label>First Name</label>
          </div>
          
          <div className="input-group">
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              required 
              onChange={handleChange}
              className={formData.lastName ? "has-value" : ""}
            />
            <span className="input-focus-effect"></span>
            <label>Last Name</label>
          </div>
          
          <div className="input-group">
            <input 
              type="tel" 
              name="phoneNumber" 
              placeholder="Phone Number" 
              required 
              onChange={handleChange}
              className={`${formData.phoneNumber ? "has-value" : ""} ${formErrors.phoneNumber ? "error-input" : ""}`}
            />
            <span className="input-focus-effect"></span>
            <label>Phone Number</label>
            {formErrors.phoneNumber && <div className="error-message">{formErrors.phoneNumber}</div>}
          </div>
          
          <div className="input-group full-width">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              required 
              onChange={handleChange}
              className={`${formData.email ? "has-value" : ""} ${formErrors.email ? "error-input" : ""}`}
            />
            <span className="input-focus-effect"></span>
            <label>Email Address</label>
            {formErrors.email && <div className="error-message">{formErrors.email}</div>}
          </div>
          
          <div className="input-group full-width">
            <input 
              type="text" 
              name="apartment" 
              placeholder="Apartment / Near By" 
              required 
              onChange={handleChange}
              className={formData.apartment ? "has-value" : ""}
            />
            <span className="input-focus-effect"></span>
            <label>Apartment / Near By</label>
          </div>
          
          <div className="input-group">
            <input 
              type="text" 
              name="pincode" 
              placeholder="Pincode" 
              required 
              onChange={handleChange}
              className={`${formData.pincode ? "has-value" : ""} ${formErrors.pincode ? "error-input" : ""}`}
            />
            <span className="input-focus-effect"></span>
            <label>Pincode</label>
            {formErrors.pincode && <div className="error-message">{formErrors.pincode}</div>}
          </div>
          
          <div className="input-group">
            <input 
              type="text" 
              name="city" 
              placeholder="City" 
              required 
              onChange={handleChange}
              className={formData.city ? "has-value" : ""}
            />
            <span className="input-focus-effect"></span>
            <label>City</label>
          </div>
          
          <div className="input-group full-width">
            <input 
              type="text" 
              name="road" 
              placeholder="Road" 
              required 
              onChange={handleChange}
              className={formData.road ? "has-value" : ""}
            />
            <span className="input-focus-effect"></span>
            <label>Road</label>
          </div>
          
          <button type="submit" className="submit-form">
            <span className="btn-text">Submit Details</span>
            <span className="btn-icon">→</span>
            <span className="btn-loader"></span>
          </button>
        </form>
      </div>

      {/* Enhanced Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                <span className="icon-wrapper">
                  <span className="icon">🧾</span>
                </span>
                Order Summary
              </h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="order-details">
                <div className="detail-item">
                  <span className="detail-label">Product:</span>
                  <span className="detail-value">{product.title}</span>
                </div>
                
                <div className="detail-item highlight">
                  <span className="detail-label">Price:</span>
                  <span className="detail-value">₹{product.price}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{selectedSize}</span>
                </div>
                {/* Added quantity detail */}
                <div className="detail-item">
                  <span className="detail-label">Quantity:</span>
                  <span className="detail-value">{quantity}</span>
                </div>
                {/* Optionally, display total price in the modal */}
                <div className="detail-item">
                  <span className="detail-label">Total:</span>
                  <span className="detail-value"> ₹{numericPrice * quantity}</span>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div className="customer-details">
                <div className="detail-item">
                  <span className="detail-label">Customer:</span>
                  <span className="detail-value">{formData.firstName} {formData.lastName}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Shipping Address:</span>
                  <span className="detail-value address">
                    {formData.apartment}, {formData.road}, {formData.city}, {formData.pincode}
                  </span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{formData.phoneNumber}</span>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="continue-payment" onClick={handleContinuePayment}>
                <span className="btn-text">Continue to Payment</span>
                <span className="btn-icon">💳</span>
              </button>
              
              <button className="close-modal" onClick={closeModal}>
                <span className="btn-text">Cancel</span>
                <span className="btn-icon">✗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
