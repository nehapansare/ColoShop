import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import config from "../../Config/CartDetail";
import "./CartDetail.css";
import Footer from "../Footer/Footer";

function CartDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = config.products.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState(product ? product.images.main : "");
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [quantity, setQuantity] = useState(1); // Quantity state
  const [showModal, setShowModal] = useState(false);
  const sizeChartImageUrl = "https://images.meesho.com/images/products/189930771/pvgr9_512.webp"; 

  useEffect(() => {
    if (product) {
      setMainImage(product.images.main);
      setSelectedSize(null);
      setQuantity(1); // Reset quantity when changing products
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

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: mainImage,
      size: selectedSize,
      quantity,
    };

    const updatedCart = [...cart, cartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Navigate to the Order Summary page and pass product details, selected size, and quantity
    navigate("/ordersummary", { state: { product, selectedSize, quantity } });
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
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="small-image"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="cart-right">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">Price: ₹{product.price}</p>
          <p className="product-color">Color: {product.color}</p>

          <div className="size-options">
            {product.sizeOptions.map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity Counter */}
          <div className="quantity-counter">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
      
          <button className="check-size-btn" onClick={() => setShowModal(true)}>
        Check Size
      </button>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowModal(false)}>
             X
            </button>
            <img src={sizeChartImageUrl} alt="Size Chart" className="size-chart-image" />
          </div>
        </div>
      )}




          <button className="add-to-cart" onClick={addToCart}>
            Add to Cart
          </button>
          <p className="delivery-info">Delivery Time: {product.deliveryTime}</p>
        </div>
      </div>

      <div className="customer-service">
        <h3>Customer Service</h3>
        <p>Complaint Address: {product?.customerService?.complaintAddress || "Not Available"}</p>
        <p>Phone: {product?.customerService?.telephone || "Not Available"}</p>
        <p>E-mail Address: {product?.customerService?.email || "Not Available"}</p>
        <p>Description: {product?.disclaimer || "Not Available"}</p>
      </div>


      <Footer />
    </div>
  );
}

export default CartDetail;
