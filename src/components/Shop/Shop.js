import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { CART } from "../../Config/Cart"; // Import CART data

function Shop() {
  return (
    <div className="shop-container">
      <Navbar />

      {/* Product List */}
      <div className="cart-container">
        {CART.map((item) => (
          <Link to={`/cartdetail/${item.id}`} key={item.id} className="cart-link">
            <div className="cart-item">
              {/* Regular Image */}
              <img src={item.imgUrl} alt={item.title} className="product-image" />

              {/* Hover Image */}
              <img src={item.hoverImgUrl} alt={item.title} className="product-image-hover" />

              <p className="title">{item.title}</p>
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
