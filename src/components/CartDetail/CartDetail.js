import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import config from "../../Config/CartDetail";
import "./CartDetail.css";

function CartDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = config.products.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState(product ? product.images.main : "");
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => {
    if (product) {
      setMainImage(product.images.main);
      setSelectedSize(null);
    }
  }, [product]);

  if (!product) {
    return <div className="error">Product not found.</div>;
  }

  const addToCart = () => {
    if (!selectedSize) {
      alert("Please select a size! ⚠️");
      return;
    }

    const cartItem = { id: product.id, title: product.title, price: product.price, image: mainImage, size: selectedSize };
    const updatedCart = [...cart, cartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Navigate to the Order Summary page
    navigate("/ordersummary", { state: { product, selectedSize } });
  };

  return (
    <div>
      <Navbar />
      <div className="cart-detail-container">
        <div className="cart-left">
          <div className="cart-box">
            <img src={mainImage} alt="Product" className="cart-image fade-in" />
          </div>
          <div className="image-container1">
            {product.images.thumbnails.map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index + 1}`} className="small-image" onClick={() => setMainImage(img)} />
            ))}
          </div>
        </div>

        <div className="cart-right">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">Price: ₹{product.price}</p>
          <p className="product-color">Color: {product.color}</p>

          <div className="size-options">
            {product.sizeOptions.map((size) => (
              <button key={size} className={`size-button ${selectedSize === size ? "active" : ""}`} onClick={() => setSelectedSize(size)}>
                {size}
              </button>
            ))}
          </div>

          <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
          <p className="delivery-info">Delivery Time: {product.deliveryTime}</p>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
