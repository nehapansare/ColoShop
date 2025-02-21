import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CART } from "../../Config/Cart"; // Import CART data

function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const [addingToCart, setAddingToCart] = useState(null);

  const addToCart = (e, item) => {
    e.preventDefault(); // Prevent navigating to detail page when clicking add to cart
    if (cartItems.some(cartItem => cartItem.id === item.id)) return;
    
  
    
    // Simulate network request
    setTimeout(() => {
      setCartItems(prevCartItems => [...prevCartItems, item]);
      
    }, 600);
  };

  const removeFromCart = (e, itemId) => {
    e.preventDefault();
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <div className="shop-container">
        <Navbar cartCount={cartItems.length} />
     
          <div className="cart-badge">
            <span className="badge-icon">🛒</span>
            <span>{cartItems.length}<i class="fa-regular fa-cart-shopping"></i></span>
          </div>

        <div className="cart-container">
          {CART.map((item) => {
            const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
            const isAddingToCart = addingToCart === item.id;
            
            return (
              <div key={item.id} className="cart-item-wrapper">
                <Link to={`/cartdetail/${item.id}`} className="cart-link">
                  <div className="cart-item">
        
                    <div className="image-container">
                      {/* Regular Image */}
                      <img src={item.imgUrl} alt={item.title} className="product-image" />
                      
                      {/* Hover Image */}
                      <img src={item.hoverImgUrl} alt={item.title} className="product-image-hover" />
                      
                      {/* Cart Indicator - Show if item is in cart */}
                      {isInCart && (
                        <div className="in-cart-indicator">
                          <span>✓ In Cart</span>
                        </div>
                      )}
                      
                      {/* Quick Add to Cart Overlay */}
                      <div className="quick-add-overlay">
                        <button 
                          className={`quick-add-btn ${isInCart ? 'in-cart' : ''}`}
                          onClick={(e) => isInCart ? removeFromCart(e, item.id) : addToCart(e, item)}
                          
                        >
                          { isInCart ? (
                            "Remove from Cart"
                          ) : (
                            "Quick Add"
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <p className="title">{item.title}</p>
                    
                    {/* Enhanced Price Display with Offer Details */}
                    <div className="price-container">
                      <div className="price-row">
                      <span className="current-price">₹{item.price}</span>
                        <span className="original-price">₹{item.price }</span>
                        <span className="discount-label">5% off</span>
                      </div>
                      
                      {/* Offer Details */}
                      <div className="offer-details">
                        <div className="applied-offer">
                          <span className="offer-icon">✓</span>
                          <span className="offer-text">₹20 OFF | appliedOffer</span>
                        </div>
                        <div className="offer-applied">Applied</div>
                      </div>
                      
                      {/* Delivery Info */}
                      <div className="delivery-info">
                        <span>Free Delivery</span>
                      </div>
                      
                      {/* Ratings */}
                      <div className="ratings">
                        <div className="rating-badge">
                          <span className="rating-value">4.3 ★</span>
                        </div>
                        <span className="review-count">759 Reviews</span>
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* Add to Cart Button */}
               
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;

