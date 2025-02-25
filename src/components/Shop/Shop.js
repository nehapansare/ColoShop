import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Shop.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CART } from "../../Config/Cart";

// Reusable components:
import Slider from "../Slider/Slider"; // Cart sidebar
import Popup from "../Popup/Popup"; // Payment form popup

function Shop() {
  const navigate = useNavigate();

  // Initialize cart items from localStorage (if available)
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

  // Persist cart changes to localStorage whenever the cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart (initialize quantity to 1)
  const addToCart = (e, item) => {
    e.preventDefault();
    if (cartItems.some((cartItem) => cartItem.id === item.id)) return;
    setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    setIsCartOpen(true);
  };

  // Function to remove an item from the cart
  const removeFromCart = (e, itemId) => {
    e.preventDefault();
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  // Function to calculate the total price (account for quantity)
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      let price = parseInt(item.price.replace(/[^0-9.]/g, ""));
      return total + (isNaN(price) ? 0 : price * (item.quantity || 1));
    }, 0);
  };

  // Handle changes in the payment form inputs
  const handleInputChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  // Handle payment form submission
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

        {/* Cart icon showing cart count */}
        <button
          className="cart-toggle-btn"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <i className="fa fa-shopping-cart"></i> {cartItems.length}
        </button>

        <div className="cart-container">
          {CART.map((item) => {
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === item.id
            );
            return (
              <div key={item.id} className="cart-item-wrapper">
                <Link to={`/cartdetail/${item.id}`} className="cart-link">
                  <div className="cart-item">
                    <div className="image-container2">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="product-image"
                      />
                      <img
                        src={item.hoverImgUrl}
                        alt={item.title}
                        className="product-image-hover"
                      />
                      {isInCart && (
                        <div className="in-cart-indicator">
                          <span>✓ In Cart</span>
                        </div>
                      )}
                      <div className="quick-add-overlay">
                        <button
                          className={`quick-add-btn ${
                            isInCart ? "in-cart" : ""
                          }`}
                          onClick={(e) =>
                            isInCart
                              ? removeFromCart(e, item.id)
                              : addToCart(e, item)
                          }
                        >
                          {isInCart ? "Remove from Cart" : "Quick Add"}
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
                          <span className="offer-text">
                            ₹20 OFF | appliedOffer
                          </span>
                        </div>
                        <div className="offer-applied">Applied</div>
                      </div>
                      <div className="delivery-info">
                        <span>Free Delivery</span>
                      </div>
                      <div className="ratings">
                        <div className="rating-badge">
                          <span className="rating-value">
                            ⭐ {item.reviews}
                          </span>
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

      {/* Cart Sidebar (Slider) */}
      {isCartOpen && (
        <Slider
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}  
          calculateTotalPrice={calculateTotalPrice}
          onClose={() => setIsCartOpen(false)}
          onPaymentClick={() => setIsPaymentFormOpen(true)}
        />
      )}

      {/* Payment Form Popup */}
      <Popup
        isOpen={isPaymentFormOpen}
        onClose={() => setIsPaymentFormOpen(false)}
        paymentDetails={paymentDetails}
        handleInputChange={handleInputChange}
        handlePaymentSubmit={handlePaymentSubmit}
      />

      <Footer />
    </div>
  );
}

export default Shop;
