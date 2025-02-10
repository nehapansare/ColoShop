import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../../components/CartDetail/Navbar/Navbar";
import config from "../../Config/CartDetail";
import "./CartDetail.css";

function CartDetail() {
  const { id } = useParams();
  const product = config.products.find((p) => p.id === id);


  // Always call hooks unconditionally.
  // Use a fallback value (an empty string) if product isn't available yet.
  const [mainImage, setMainImage] = useState(product ? product.images.main : "");
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (product) {
      setMainImage(product.images.main);
      setSelectedSize(null);
    }
  }, [product]);

  // Now conditionally render an error message if the product is not found.
  if (!product) {
    return <div className="error">Product not found.</div>;
  }

  return (
    <div>
      <Navbar />
      <Navbar1 />
      <div className="cart-detail-container">
        {/* Left Section: Product Image */}
        <div className="cart-left">
          <div className="cart-box">
            <img src={mainImage} alt="Product" className="cart-image fade-in" />
          </div>
          {/* Small Image Thumbnails */}
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

        {/* Right Section: Product Details */}
        <div className="cart-right">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">{product.price}</p>
          <p className="product-color">{product.color}</p>

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

          <button className="add-to-cart">Add to Cart</button>

          <p className="delivery-info">Delivery Time: {product.deliveryTime}</p>
          <p className="reviews">{product.reviews}</p>
          <p>{product.description}</p>
        </div>
      </div>

      {/* Additional Product Description and Information */}
      <div className="product-description">
        <h3>Size Details</h3>
        <p>
          Back: Length: 73.5 cm (Size M/T), Shoulder: Width: 58.0 cm (Size M/T),
          Sleeve: Length: 54.0 cm (Size M/T)
        </p>
        <ul>
          {Object.keys(product.sizes).map((size) => (
            <li key={size}>
              {size}: Width: {product.sizes[size].width}, Length: {product.sizes[size].length}
            </li>
          ))}
        </ul>

        <h3>Other Details</h3>
        <ul>
          {product.otherDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>

        <h3>Customer Service</h3>
        <p>
          In case of consumer complaint, write to{" "}
          <strong>{config.customerService.complaintAddress}</strong> or call
          Telephone: {config.customerService.telephone}.
        </p>
        <p>
          For online and store complaints, email{" "}
          <a href={`mailto:${config.customerService.email}`
}>
            {config.customerService.email}
          </a>
        </p>

        <p>
          <strong>Disclaimer:</strong> {config.disclaimer}
        </p>
      </div>
    </div>
  );
}

export default CartDetail;