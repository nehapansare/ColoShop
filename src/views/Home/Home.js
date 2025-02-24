import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Navbar2 from '../../components/Navbar/Navbar2/Navbar';
import Footer from '../../../src/components/Footer/Footer';
import banner from '../../../src/img/Black Red Minimalist Fashion Product Introduction Landscape Banner.png';
import saleImg from '../../img/Black And White Modern Fashion Sale Banner Landscape.png';
import './Home.css'; // Ensure your CSS reflects the updated class names
import {products,beauty,accessories}from '../../Config/HomeCart';

function Home() {
  // Product data for Beauty Products
  

  // Product data for Regular Products
 
  // Cart state and functions
  const [cartItems, setCartItems] = useState([]);
  const [addingToCart, setAddingToCart] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (e, product) => {
    e.preventDefault();
    if (cartItems.some(item => item.id === product.id)) return;
    // Simulate network delay before adding item
    setTimeout(() => {
      setCartItems(prev => [...prev, product]);
    }, 600);
  };

  const removeFromCart = (e, productId) => {
    e.preventDefault();
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Countdown timer (3 days from now)
  const [timeLeft, setTimeLeft] = useState({ hours: '', minutes: '', seconds: '' });
  useEffect(() => {
    const countdownEnd = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownEnd - now;
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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

  return (
    <div className="home-page">
      {/* Floating View Cart Button */}
      <div className="cart-badge">
  <span className="badge-icon">🛒</span>
  <span className="badge-number">{cartItems.length}</span>
</div>

      <div className="home-container">
        <Navbar />
        <div className="image-container">
          <img src={banner} alt="Background" className="full-screen-img" />
          <button className="explore-btn">
            <Link to='/shop'>Explore Now</Link>
          </button>
        </div>

        {/* Our Products Section */}
        <div id='product'>
          <p className="p1">Our Products</p>
          <Navbar2 />
          <div className="cart-container2">
            {products.map((product) => {
              const isInCart = cartItems.some(item => item.id === product.id);
              return (
                <div key={product.id} className="cart-item-wrapper">
                  <Link to={`/cartdetail/${product.id}`} className="cart-link">
                    <div className="cart-item">
                      <div className="image-container2">
                        <img src={product.img} alt={product.title} className="product-image" />
                        <img src={product.hoverImg} alt={product.title} className="product-image-hover" />
                        {isInCart && (
                          <div className="in-cart-indicator">
                            <span>✓ In Cart</span>
                          </div>
                        )}
                        <div className="quick-add-overlay">
                          <button 
                            className={`quick-add-btn ${isInCart ? 'in-cart' : ''}`}
                            onClick={(e) => isInCart ? removeFromCart(e, product.id) : addToCart(e, product)}
                          >
                            { isInCart ? "Remove from Cart" : "Quick Add" }
                          </button>
                        </div>
                      </div>
                      <p className="title">{product.title}</p>
                      <div className="price-container">
                        <div className="price-row">
                          <span className="current-price">{product.price}</span>
                          <span className="original-price">{product.price}</span>
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
                            <span className="rating-value">⭐ {product.rating}</span>
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

        {/* Sale Section with Countdown */}
        <div className="sale-container">
          <div className="sale-img-wrapper">
            <img src={saleImg} alt="Sale" className="sale-img" />
            <div className="timer-boxes">
              <div className="timer-box">{timeLeft.hours}h</div>
              <div className="timer-box">{timeLeft.minutes}m</div>
              <div className="timer-box">{timeLeft.seconds}s</div>
            </div>
            <button className="shop-now-btn">
              <Link to="/shop"><b>Shop Now</b></Link>
            </button>
          </div>
        </div>

        {/* Our Beauty Products Section */}
        <div id='beauty'>
        <p className="p1" >Our Beauty Products</p>
        <div className="cart-container2">
          {beauty.map((product) => {
            const isInCart = cartItems.some(item => item.id === product.id);
            return (
              <div key={product.id} className="cart-item-wrapper">
                <Link to={`/cartdetail/${product.id}`} className="cart-link">
                  <div className="cart-item">
                    <div className="image-container1">
                      <img src={product.img} alt={product.title} className="product-image" />
                      <img src={product.hoverImg} alt={product.title} className="product-image-hover" />
                      {isInCart && (
                        <div className="in-cart-indicator">
                          <span>✓ In Cart</span>
                        </div>
                      )}
                      <div className="quick-add-overlay">
                        <button 
                          className={`quick-add-btn ${isInCart ? 'in-cart' : ''}`}
                          onClick={(e) => isInCart ? removeFromCart(e, product.id) : addToCart(e, product)}
                        >
                          { isInCart ? "Remove from Cart" : "Quick Add" }
                        </button>
                      </div>
                    </div>
                    <p className="title">{product.title}</p>
                    <div className="price-container">
                      <div className="price-row">
                        <span className="current-price">{product.price}</span>
                        <span className="original-price">{product.price}</span>
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
                          <span className="rating-value">⭐ {product.rating}</span>
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

      {/* Our Accessories Section */}
<div id='accessories'>
  <p className="p1">Our Accessories</p>
  <div className="cart-container2">
    {accessories.map((product) => {
      const isInCart = cartItems.some(item => item.id === product.id);
      return (
        <div key={product.id} className="cart-item-wrapper">
          <Link to={`/cartdetail/${product.id}`} className="cart-link">
            <div className="cart-item">
              <div className="image-container2">
                <img src={product.img} alt={product.title} className="product-image" />
                <img src={product.hoverImg} alt={product.title} className="product-image-hover" />
                {isInCart && (
                  <div className="in-cart-indicator">
                    <span>✓ In Cart</span>
                  </div>
                )}
                <div className="quick-add-overlay">
                  <button 
                    className={`quick-add-btn ${isInCart ? 'in-cart' : ''}`}
                    onClick={(e) => isInCart ? removeFromCart(e, product.id) : addToCart(e, product)}
                  >
                    { isInCart ? "Remove from Cart" : "Quick Add" }
                  </button>
                </div>
              </div>
              <p className="title">{product.title}</p>
              <div className="price-container">
                <div className="price-row">
                  <span className="current-price">{product.price}</span>
                  <span className="original-price">{product.price}</span>
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
                    <span className="rating-value">⭐ {product.rating}</span>
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
