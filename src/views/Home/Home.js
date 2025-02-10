import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css'; // Import CSS for styling
import banner from '../../../src/img/Black Red Minimalist Fashion Product Introduction Landscape Banner.png';
import Footer from '../../../src/components/Footer/Footer';
import Navbar2 from '../../components/Navbar/Navbar2/Navbar';
import saleImg from '../../img/Black And White Modern Fashion Sale Banner Landscape.png';
import { Link } from 'react-router-dom';

function Home() {
  const products = [
    { id: 1, img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR-JTbnjQQZL5LlIU3F4Kzn66xj-Ex9SS_-MLBqt5ubBXtFxtbUYBnRmQEUrz0btQ4SwnOI9s1M1YG8Koi5ElUCU6gQEbn9LS-sMBY-rHr-v8zgUs5eod8ZKQ&usqp=CAE', title: 'Product 1', price: '$19.99', rating: 4.5 },
    { id: 2, img: 'https://image.hm.com/assets/hm/e9/d6/e9d6185fcb10f4756c7e84464dfed9a071f5c810.jpg?imwidth=396', title: 'Product 2', price: '$24.99', rating: 4 },
    { id: 3, img: 'https://image.hm.com/assets/hm/6a/76/6a76335b1a247da3bd021fe9db976fead98a7462.jpg?imwidth=396', title: 'Product 3', price: '$29.99', rating: 5 },
    { id: 4, img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKHPdaxZ-aZMvUMq-i1hB_EnizyWVfYPKXSSrPsxQuUpfwiXV_40LO0t8McypmyS-ci2cbZPCK3g6g8PTxYYtjOkyPqMMcL1_mm1W1T5I&usqp=CAE', title: 'Product 4', price: '$14.99', rating: 4.2 },
    { id: 5, img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOkZOLBZ6tf6Vy4m7rXWUSaoQGW0PktwS5i-C62kV3FNnOn-lkd3DgzW_CY98RYoP7FE0vzIbOY9irWl4d9EC_Irua9tA0RN8OJG59Y1iG&usqp=CAE', title: 'Product 5', price: '$34.99', rating: 3.8 },
    { id: 6, img: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2Ffb%2F8ffb40fb2f7b922e0e6fb0592d17e466dd97ba30.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]', title: 'Product 6', price: '$39.99', rating: 4.7 },
  ];

  // Set the countdown end time (3 days from now)
  const [timeLeft, setTimeLeft] = useState({ hours: '', minutes: '', seconds: '' });

  useEffect(() => {
    const countdownEnd = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownEnd - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the timer once the countdown reaches zero
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
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="image-container">
        <img 
          src={banner}
          alt="Background" 
          className="full-screen-img"
        />
        <button className="explore-btn"><Link to='/shop'>Explore Now</Link></button>
      </div>

      <div>
        <p className='p1'>Our Products</p>
        <Navbar2/>
        <div className="cart-container3">
          {products.map((product) => (
            <div className="cart-item3" key={product.id}>
              <div className="image-wrapper">
                <img src={product.img} alt={product.title} className="cart-img3" />
              </div>
              <h3>{product.title}</h3>
              <div className="price-rating">
                <span>{product.price}</span>
                <span>⭐ {product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sale-container">
        <div className="sale-img-wrapper">
          <img src={saleImg}className='sale-img' />
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

      <Footer />
    </div>
  );
}

export default Home;
