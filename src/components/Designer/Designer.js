import React from "react";
import "./Designer.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import products from "../../Config/Designer";

function Designer() {
  

  return (
    <div>
      <Navbar />
      <div className="container3">
        <h2 className="title3">Explore Top Fashion Designers</h2>
        <div className="product3-grid">
          <div className="product3-column">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="card3">
                <div className="image3-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product3-image"
                  />
                </div>
                <div className="card3-content">
                  <div className="category3">{product.category}</div>
                  <h3 className="product3-name">{product.name}</h3>
                  <div className="product3-details">
                    <div className="detail3">
                      <span className="label3">Description:</span>{" "}
                      <span>{product.describe}</span>
                    </div>
                  </div>
                  <Link to={`/Designerdetail/${product.id}`}>
                    <button className="add-to-cart-btn">Explore More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="product3-column">
            {products.slice(4, 8).map((product) => (
              <div key={product.id} className="card3">
                <div className="image3-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product3-image"
                  />
                </div>
                <div className="card3-content">
                  <div className="category3">{product.category}</div>
                  <h3 className="product3-name">{product.name}</h3>
                  <div className="product3-details">
                    <div className="detail3">
                      <span className="label3">Description:</span>{" "}
                      <span>{product.describe}</span>
                    </div>
                  </div>
                  <Link to={`/Designerdetail/${product.id}`}>
                    <button className="add-to-cart-btn">Explore More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Designer;
