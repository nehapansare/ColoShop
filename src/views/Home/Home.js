import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2/Navbar";
import Footer from "../../../src/components/Footer/Footer";
import banner from "../../../src/img/Black Red Minimalist Fashion Product Introduction Landscape Banner.png";
import saleImg from "../../img/Black And White Modern Fashion Sale Banner Landscape.png";
import "./Home.css";
import { products, beauty, accessories } from "../../Config/HomeCart";

// Reusable components:
import Slider from "../../components/Slider/Slider"; // Cart sidebar slider
import Popup from "../../components/Popup/Popup"; // Payment form popup

function Home() {
  // Initialize cart items from local storage (if available)
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);

  // Persist cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (e, product) => {
    e.preventDefault();
    if (cartItems.some((item) => item.id === product.id)) return;
    setTimeout(() => {
       setCartItems((prev) => [...prev, { ...product, quantity: 1}]);
    }, 600);
  };
  
  const removeFromCart = (e, productId) => {
    e.preventDefault();
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity > 1 ? newQuantity : 1 } : item
      )
    );
  };
  

  
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
     
      return total + (isNaN(price) ? 0 : price * item.quantity);
    }, 0);
  };
  

 
  const [timeLeft, setTimeLeft] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });
  useEffect(() => {
    const countdownEnd = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownEnd - now;
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
      } else {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({
          hours: hours < 10 ? `0${hours}` : `${hours}`,
          minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
          seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details:", paymentDetails);
    alert("Payment details submitted successfully!");
    setIsPaymentFormOpen(false);
  
   
  };

  return (
    <div className="home-page">

<button
  className="cart-toggle-btn"
  onClick={() => setIsCartOpen(!isCartOpen)}
>
  🛒
  <span className="cart-count">{cartItems.length}</span>
</button>


      {isCartOpen && (
        <Slider
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          calculateTotalPrice={calculateTotalPrice}
          updateQuantity={updateQuantity}  
          onClose={() => setIsCartOpen(false)}
          onPaymentClick={() => setIsPaymentFormOpen(true)}
        />
      )}

      <Popup
        isOpen={isPaymentFormOpen}
        onClose={() => setIsPaymentFormOpen(false)}
        paymentDetails={paymentDetails}
        handleInputChange={handleInputChange}
        handlePaymentSubmit={handlePaymentSubmit}
      />

      <div className="home-container">
        <Navbar />
        <div className="image-container">
          <img src={banner} alt="Background" className="full-screen-img" />
          <button className="explore-btn">
            <Link to="/shop">Explore Now</Link>
          </button>
        </div>

        <div id="product">
          <p className="p1">Our Products</p>
          <Navbar2 />
          <div className="cart-container2">
            {products.map((product) => {
              const isInCart = cartItems.some(
                (item) => item.id === product.id
              );
              return (
                <div key={product.id} className="cart-item-wrapper">
                  <Link to={`/cartdetail/${product.id}`} className="cart-link">
                    <div className="cart-item">
                      <div className="image-container2">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="product-image"
                        />
                        <img
                          src={product.hoverImg}
                          alt={product.title}
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
                                ? removeFromCart(e, product.id)
                                : addToCart(e, product)
                            }
                          >
                            {isInCart ? "Remove from Cart" : "Quick Add"}
                          </button>
                        </div>
                      </div>
                      <p className="title">{product.title}</p>
                      <div className="price-container">
                        <div className="price-row">
                          <span className="current-price">
                            {product.price}
                          </span>
                          <span className="original-price">
                            {product.price}
                          </span>
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
                              ⭐ {product.rating}
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

    
        <div className="sale-container">
          <div className="sale-img-wrapper">
            <img src={saleImg} alt="Sale" className="sale-img" />
            <div className="timer-boxes">
              <div className="timer-box">{timeLeft.hours}h</div>
              <div className="timer-box">{timeLeft.minutes}m</div>
              <div className="timer-box">{timeLeft.seconds}s</div>
            </div>
            <button className="shop-now-btn">
              <Link to="/shop">
                <b>Shop Now</b>
              </Link>
            </button>
          </div>
        </div>


        <div id="beauty">
          <p className="p1">Our Beauty Products</p>
          <div className="cart-container2">
            {beauty.map((product) => {
              const isInCart = cartItems.some(
                (item) => item.id === product.id
              );
              return (
                <div key={product.id} className="cart-item-wrapper">
                  <Link to={`/cartdetail/${product.id}`} className="cart-link">
                    <div className="cart-item">
                      <div className="image-container1">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="product-image"
                        />
                        <img
                          src={product.hoverImg}
                          alt={product.title}
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
                                ? removeFromCart(e, product.id)
                                : addToCart(e, product)
                            }
                          >
                            {isInCart ? "Remove from Cart" : "Quick Add"}
                          </button>
                        </div>
                      </div>
                      <p className="title">{product.title}</p>
                      <div className="price-container">
                        <div className="price-row">
                          <span className="current-price">
                            {product.price}
                          </span>
                          <span className="original-price">
                            {product.price}
                          </span>
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
                              ⭐ {product.rating}
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

   
        <div id="accessories">
          <p className="p1">Our Accessories</p>
          <div className="cart-container2">
            {accessories.map((product) => {
              const isInCart = cartItems.some(
                (item) => item.id === product.id
              );
              return (
                <div key={product.id} className="cart-item-wrapper">
                  <Link to={`/cartdetail/${product.id}`} className="cart-link">
                    <div className="cart-item">
                      <div className="image-container2">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="product-image"
                        />
                        <img
                          src={product.hoverImg}
                          alt={product.title}
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
                                ? removeFromCart(e, product.id)
                                : addToCart(e, product)
                            }
                          >
                            {isInCart ? "Remove from Cart" : "Quick Add"}
                          </button>
                        </div>
                      </div>
                      <p className="title">{product.title}</p>
                      <div className="price-container">
                        <div className="price-row">
                          <span className="current-price">
                            {product.price}
                          </span>
                          <span className="original-price">
                            {product.price}
                          </span>
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
                              ⭐ {product.rating}
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
