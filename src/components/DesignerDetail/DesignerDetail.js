import React, { useState } from "react";
import "./DesignerDetail.css";
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import pastDesigns from "../../Config/DesignerCard";

const DesignerDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dressType: "",
    price: "",
    color: "",
    measurements: {
      Bust: "",
      Waist: "",
      Hips: "",
      Length: "",
      Sleeves: "",
    },
    additionalNotes: "",
  });

  const [selectedVariation, setSelectedVariation] = useState(null);
  const [isFreeSize, setIsFreeSize] = useState(true);

  const { id } = useParams();
  const selectedDesign = pastDesigns.find((design) => design.id === parseInt(id));

  if (!selectedDesign) {
    return <div>Design not found!</div>;
  }

  const handleSelectDesign = (variation) => {
    setSelectedVariation(variation);
    setIsFreeSize(true);
    setFormData((prev) => ({
      ...prev,
      dressType: variation.name,
      price: variation.price, // Ensures price is set correctly
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name.includes("measurements") ? "measurements" : name]: name.includes("measurements")
        ? { ...prev.measurements, [name.split(".")[1]]: value.replace(/\D/g, "") }
        : value,
    }));
  };

  const handleSizeSelection = (sizeType) => {
    setIsFreeSize(sizeType === "Free Size");
  
    const numericPrice = parseFloat((selectedVariation?.price || "0").replace(/[^0-9.]+/g, "")) || 0;
  
    setFormData((prev) => ({
      ...prev,
      price: sizeType === "Custom Size" ? numericPrice * 2 : numericPrice,
    }));
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.color) {
      toast.error("Please select a color before submitting.");
      return;
    }
    console.log("Form submitted:", formData);
    toast.success("Order request submitted successfully!");
  };

  return (
    <div className="fashion-container">
      <Toaster />
      <h1 className="fashion-title">Designer Collection Detail</h1>

      <div className="fashion-grid">
        {/* Left Side - Selected Design */}
        <div className="fashion-portfolio">
          {selectedDesign.variations.map((variation, index) => (
            <div key={index} className="fashion-card">
              <img src={variation.image} alt={variation.name} className="fashion-image" />
              <div className="fashion-card-content">
                <h3 className="fashion-card-title">{variation.name}</h3>
                <p className="fashion-card-price">{variation.price}</p>
                <p className="fashion-card-description">{variation.description}</p>
                <button className="fashion-card-btn" onClick={() => handleSelectDesign(variation)}>
                  Select Design
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Contact Form */}
        <div className="fashion-form">
          <h2 className="form-title">Custom Dress Order Form</h2>
          <form onSubmit={handleSubmit} className="order-form">
            <label>
              Full Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </label>

            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </label>

            <label>
              Phone:
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </label>

            <label>
              Address:
              <textarea name="address" value={formData.address} onChange={handleInputChange} required />
            </label>

            <label>
              Dress Type:
              <input type="text" name="dressType" value={formData.dressType} readOnly />
            </label>

            <label>
              Price:
              <input type="text" name="price" value={formData.price} readOnly />
            </label>

            {/* Color Selection - Required */}
            <label>
              Select Color:
              <select name="color" value={formData.color} onChange={handleInputChange} required>
                <option value="">-- Select a Color --</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Pink">Pink</option>
              </select>
            </label>

            {/* Free Size Radio Buttons */}
            <div className="size-selection">
              <label>
                <input
                  type="radio"
                  name="sizeType"
                  value="Free Size"
                  checked={isFreeSize}
                  onChange={() => handleSizeSelection("Free Size")}
                />
                Free Size
              </label>

              <label>
                <input
                  type="radio"
                  name="sizeType"
                  value="Custom Size"
                  checked={!isFreeSize}
                  onChange={() => handleSizeSelection("Custom Size")}
                />
                Custom Size
              </label>
            </div>

            <h3>Measurements (in inches):</h3>
            <div className="measurements-grid">
              {["Bust", "Waist", "Hips", "Length", "Sleeves"].map((measurement) => (
                <label key={measurement}>
                  {measurement}
                  <input
                    type="number"
                    name={`measurements.${measurement}`}
                    value={formData.measurements[measurement]}
                    onChange={handleInputChange}
                    required={!isFreeSize}
                    disabled={isFreeSize}
                  />
                </label>
              ))}
            </div>

            <label>
              Additional Notes:
              <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleInputChange} />
            </label>

            <button type="submit" className="submit-button">
              Submit Order Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DesignerDetail;
