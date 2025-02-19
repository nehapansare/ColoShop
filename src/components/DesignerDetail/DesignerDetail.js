import React, { useState } from "react";
import "./DesignerDetail.css"; // Import the CSS file

const DesignerDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dressType: "",
    measurements: {
      bust: "",
      waist: "",
      hips: "",
      length: "",
      sleeves: "",
    },
    additionalNotes: "",
  });

  const pastDesigns = [
    {
      id: 1,
      name: "Evening Gown Collection",
      description: "Elegant floor-length gowns with intricate beadwork",
      image: "/api/placeholder/300/400",
      price: "$1,200",
    },
    {
      id: 2,
      name: "Summer Wedding Collection",
      description: "Light and airy dresses perfect for summer ceremonies",
      image: "/api/placeholder/300/400",
      price: "$1,500",
    },
    {
      id: 3,
      name: "Cocktail Dress Series",
      description: "Modern and sophisticated knee-length cocktail dresses",
      image: "/api/placeholder/300/400",
      price: "$800",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="fashion-container">
      <h1 className="fashion-title">Designer Collections</h1>

      <div className="fashion-grid">
        {/* Left Side - Portfolio Section */}
        <div className="fashion-portfolio">
          {pastDesigns.map((design) => (
            <div key={design.id} className="fashion-card">
              <img src={design.image} alt={design.name} className="fashion-image" />
              <div className="fashion-card-content">
                <h3 className="fashion-card-title">{design.name}</h3>
                <p className="fashion-card-price">{design.price}</p>
                <p className="fashion-card-description">{design.description}</p>
                <button className="fashion-button">Select Design</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Contact Form */}
        <div className="fashion-form">
          <h2 className="form-title">Custom Dress Order Form</h2>
          <form onSubmit={handleSubmit} className="order-form">
            <label htmlFor="name">Full Name:</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="dressType">Dress Type:</label>
            <input
              id="dressType"
              name="dressType"
              value={formData.dressType}
              onChange={handleInputChange}
              placeholder="e.g., Evening Gown, Wedding Dress"
              required
            />

            <h3>Measurements (in inches):</h3>
            <div className="measurements-grid">
              {Object.keys(formData.measurements).map((measurement) => (
                <div key={measurement}>
                  <label htmlFor={measurement}>
                    {measurement.charAt(0).toUpperCase() + measurement.slice(1)}
                  </label>
                  <input
                    id={measurement}
                    name={`measurements.${measurement}`}
                    type="number"
                    value={formData.measurements[measurement]}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}
            </div>

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
