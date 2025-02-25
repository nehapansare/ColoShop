import React, { useState } from "react";
import "./QuantityCounter.css"; // Import CSS file

const QuantityCounter = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="counter-container">
      <h2>Quantity: {quantity}</h2>
      <button className="increase-btn" onClick={() => setQuantity(quantity + 1)}>+ Increase</button>
      <button 
        className="decrease-btn"
        onClick={() => setQuantity(quantity - 1)}
      >
        -Decrease
      </button>
      <button className="reset-btn" onClick={() => setQuantity(0)}>🔄 Reset</button>
    </div>
  );
};

export default QuantityCounter;
