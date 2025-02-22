import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Navbar2 from '../../components/Navbar/Navbar2/Navbar';
import Footer from '../../../src/components/Footer/Footer';
import banner from '../../../src/img/Black Red Minimalist Fashion Product Introduction Landscape Banner.png';
import saleImg from '../../img/Black And White Modern Fashion Sale Banner Landscape.png';
import './Home.css'; // Ensure your CSS reflects the updated class names

function Home() {
  // Product data for Beauty Products
  const beauty = [
    { 
      id: 1, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZvEBPFIsucF-dKl7xhIBX8WhXW0FSH3XV5GkkOBvMXadV0caxtmFUpmiU3bzBrAN11PWST-ufG4ifZaq7QdrIl44RJ_HQQheK_QQRMSJyCt8afXb7X9EfMA', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+1',
      title: 'Product 1', 
      price: '$19.99', 
      rating: 4.5 
    },
    { 
      id: 2, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRVTnH_w1r5Y-zrs_9AMYkzQzYhf8kH1Xm7d2OdB9e8Y4bHf9HLEs9_0S9hswlTMWna30yBbmWDzw-_f5JNQRKUJJaF5Uw7J-u8Ois-RrjNQ_nXr-2a0knA&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+2',
      title: 'Product 2', 
      price: '$24.99', 
      rating: 4 
    },
    { 
      id: 3, 
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3CvE8USpoywCBDDm7zZVce5RtbZxhZcjkbQHNO2P_rGIK42D53AK5JM1dN4cUi_ycc-arnpNjCSWxmv3NHtbz59EwHba7ezLtHQr2laZPGETc-sb0HhcQdg', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+3',
      title: 'Product 3', 
      price: '$29.99', 
      rating: 5 
    },
    { 
      id: 4, 
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVXGOGwpTKkJpJr_9RF4y-_DMuRklkFlJgyJYx1l1ONNtzMBx1Ln5Igec7SdaG5f9eU_fhtYEX0JLgc2pezRlIsPqS9k6PZNZY_qZhHGzhlLB5ucw8JNg_Wg&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+4',
      title: 'Product 4', 
      price: '$14.99', 
      rating: 4.2 
    },
    { 
      id: 5, 
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7wA9hxYlJkNN5qWOsOrAEYGHRlUqZnx3QstoipkDsk1ZWUFj01rWce74DMRifUmkXlNloMyD-TrEqUl1frd4cZbzdc8p1up2qvFuN0gcjwE3OY5CqYA-ENQ&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+5',
      title: 'Product 5', 
      price: '$34.99', 
      rating: 3.8 
    },
    { 
      id: 6, 
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIH7Xm3-0M08l-l_lpenLPQPJOao3M2iR0PXZTjPvSKxvFHL6yk0kBC-VpWw73kXKmNDsrr_MYKCXvVKTeSO57HTlqkzdQcEdpUqgnVh8fP8N9T-JlRamX&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Beauty+6',
      title: 'Product 6', 
      price: '$39.99', 
      rating: 4.7 
    },
  ];

  // Product data for Regular Products
  const products = [
    { 
      id: 11, 
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-JTbnjQQZL5LlIU3F4Kzn66xj-Ex9SS_-MLBqt5ubBXtFxtbUYBnRmQEUrz0btQ4SwnOI9s1M1YG8Koi5ElUCU6gQEbn9LS-sMBY-rHr-v8zgUs5eod8ZKQ&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Product+1',
      title: 'Product 1', 
      price: '$19.99', 
      rating: 4.5 
    },
    { 
      id: 12, 
      img: 'https://image.hm.com/assets/hm/e9/d6/e9d6185fcb10f4756c7e84464dfed9a071f5c810.jpg?imwidth=396', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Product+2',
      title: 'Product 2', 
      price: '$24.99', 
      rating: 4 
    },
    { 
      id: 13, 
      img: 'https://image.hm.com/assets/hm/6a/76/6a76335b1a247da3bd021fe9db976fead98a7462.jpg?imwidth=396', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Product+3',
      title: 'Product 3', 
      price: '$29.99', 
      rating: 5 
    },
    { 
      id: 14, 
      img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKHPdaxZ-aZMvUMq-i1hB_EnizyWVfYPKXSSrPsxQuUpfwiXV_40LO0t8McypmyS-ci2cbZPCK3g6g8PTxYYtjOkyPqMMcL1_mm1W1T5I&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Product+4',
      title: 'Product 4', 
      price: '$14.99', 
      rating: 4.2 
    },
    { 
      id: 15, 
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOkZOLBZ6tf6Vy4m7rXWUSaoQGW0PktwS5i-C62kV3FNnOn-lkd3DgzW_CY98RYoP7FE0vzIbOY9irWl4d9EC_Irua9tA0RN8OJG59Y1iG&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Product+5',
      title: 'Product 5', 
      price: '$34.99', 
      rating: 3.8 
    },
    { 
      id: 16, 
      img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSn--jH-hKoV103XrXfgeyAA_FjSvRYP0Hy0Q3EKmAYs3IlFUeb6P-sKxjaX74xDbpsZeIe8x9pIa7IeQfEsVjxrMKpnwHx-UbBf4dMNtro&usqp=CAE', 
      hoverImg: 'https://via.placeholder.com/300?text=Hover+Product+6',
      title: 'Product 6', 
      price: '$39.99', 
      rating: 4.7 
    },
  ];

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
            <span>{cartItems.length}</span>
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
        <div>
          <p className="p1">Our Products</p>
          <Navbar2 />
          <div className="cart-container2">
            {products.map((product) => {
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
        <p className="p1">Our Beauty Products</p>
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

      
      <Footer />
    </div>
  );
}

export default Home;
