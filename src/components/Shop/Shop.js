import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CART } from "../../Config/Cart";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);
  
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (e, item) => {
    e.preventDefault();
    if (cartItems.some(cartItem => cartItem.id === item.id)) return;
    setCartItems(prevCartItems => [...prevCartItems, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (e, itemId) => {
    e.preventDefault();
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      let price = parseInt(item.price.replace(/[^0-9.]/g, ""));
      return total + (isNaN(price) ? 0 : price);
    }, 0);
  };

  const handleInputChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details:", paymentDetails);
    alert("Payment details submitted successfully!");
    setIsPaymentFormOpen(false);
    navigate("/payment"); 
  };

  return (
    <div>
      <div className="shop-container">
        <Navbar />
        <div className="cart-badge" onClick={() => setIsCartOpen(!isCartOpen)}>
          <span className="badge-icon">🛒</span>
          <span className="badge-number">{cartItems.length}</span>
        </div>

        <div className="cart-container">
          {CART.map((item) => {
            const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
            return (
              <div key={item.id} className="cart-item-wrapper">
                <Link to={`/cartdetail/${item.id}`} className="cart-link">
                  <div className="cart-item">
                    <div className="image-container1">
                      <img src={item.imgUrl} alt={item.title} className="product-image" />
                      <img src={item.hoverImgUrl} alt={item.title} className="product-image-hover" />
                      {isInCart && <div className="in-cart-indicator"><span>✓ In Cart</span></div>}
                      <div className="quick-add-overlay">
                        <button 
                          className={`quick-add-btn ${isInCart ? 'in-cart' : ''}`}
                          onClick={(e) => isInCart ? removeFromCart(e, item.id) : addToCart(e, item)}
                        >
                          { isInCart ? "Remove from Cart" : "Quick Add" }
                        </button>
                      </div>
                    </div>
                    <p className="title">{item.title}</p>
                    <div className="price-container">
                      <div className="price-row">
                        <span className="current-price">₹{item.price}</span>
                        <span className="original-price">₹{item.price}</span>
                        <span className="discount-label">5% off</span>
                      </div>
                      <div className="offer-details">
                  <div className="applied-offer">
                    <span className="offer-icon">✓</span>
                    <span className="offer-text">₹20 OFF | appliedOffer</span>
                  </div>
                  <div className="offer-applied">Applied</div>
                </div>
                <div className="delivery-info">
                  <span>Free Delivery</span>
                </div>
                <div className="ratings">
                  <div className="rating-badge">
                    <span className="rating-value">⭐ {item.rating}</span>
                  </div>
                  <span className="review-count">759 Reviews</span>
                </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>✖</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-sidebar">
                <img src={item.imgUrl} alt={item.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <p>{item.title}</p>
                  <span>₹{item.price}</span>
                </div>
                <button onClick={(e) => removeFromCart(e, item.id)} className="remove-btn">✖</button>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total Price: ₹{calculateTotalPrice()}</h3>
            </div>
            <div className="checkout-section">
              <button className="checkout-btn" onClick={() => setIsPaymentFormOpen(true)}>
                Continue to Payment
              </button>
            </div>
          </div>
        )}
      </div>

      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}

      {/* Payment Form Popup */}
      {isPaymentFormOpen && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Payment Details</h2>
            <form onSubmit={handlePaymentSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={paymentDetails.name} onChange={handleInputChange} placeholder="Enter your name" required />
              
              <label>Email:</label>
              <input type="email" name="email" value={paymentDetails.email} onChange={handleInputChange} placeholder="Enter your email" required />
              
              <label>Phone Number:</label>
              <input type="tel" name="phone" value={paymentDetails.phone} onChange={handleInputChange} placeholder="Enter your phone number" required />
              
              <label>Address:</label>
              <textarea name="address" value={paymentDetails.address} onChange={handleInputChange} placeholder="Enter your address" required></textarea>

              <label>Pincode:</label>
              <input type="text" name="pincode" value={paymentDetails.pincode} onChange={handleInputChange} placeholder="Enter your pincode" required />

              <button type="submit">Proceed to Payment</button>
            </form>
            <button className="close-btn" onClick={() => setIsPaymentFormOpen(false)}>✖</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Shop;
