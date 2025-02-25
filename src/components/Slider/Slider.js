import React from "react";
import "./Slider.css";

const Slider = ({
  cartItems,
  removeFromCart,
  updateQuantity,
  calculateTotalPrice,
  onClose,
  onPaymentClick,
}) => {
  return (
    <>
      <div className={`cart-sidebar ${cartItems && "open"}`}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-sidebar">
                <img
                  src={item.img}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <p>{item.title}</p>
                  {/* Display updated price based on quantity */}
                  <span>
                    ₹
                    {parseInt(item.price.replace(/[^0-9.]/g, "")) *
                      item.quantity}
                  </span>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={(e) => removeFromCart(e, item.id)}
                  className="remove-btn"
                >
                  ✖
                </button>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total Price: ₹{calculateTotalPrice()}</h3>
            </div>
            <div className="checkout-section">
              <button className="checkout-btn" onClick={onPaymentClick}>
                Continue to Payment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close the slider */}
      <div className="cart-overlay" onClick={onClose}></div>
    </>
  );
};

export default Slider;
