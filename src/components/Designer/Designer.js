import React from "react";
import "./Designer.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Designer() {
  const products = [
    {
      id: 1,
      image: "https://static.toiimg.com/photo/77301564.cms",
      category: "WOMEN",
      name: "Ritu Kumar",
      describe:
        "She designs luxurious and traditional Indian clothing, known for intricate embroidery and rich fabrics. She specializes in bridal wear and ethnic designs.",
    },
    {
      id: 2,
      image:
        "https://www.bollywoodshaadis.com/img/article-20231233813144947689000.webp",
      category: "WOMEN",
      name: "Anita Dongre",
      describe:
        "She creates sustainable fashion, promoting eco-friendly materials and techniques. Her label Grassroot focuses on reviving traditional crafts and empowering artisans.",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQscTEZWbV1bCb7gEEOTITqWYU0ju5YM7YesI6XM_Cy0cwi6nCN",
      category: "MEN",
      name: "Manish Malhotra",
      describe:
        "Famous for designing outfits for Bollywood stars, he creates glamorous and stylish clothing, especially for weddings, parties, and red carpet events.",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToXfsep6ZWcmSAFQEB6flSb1GPvH8NQvbyoKc_cuf24Xn5dnNQ",
      category: "MEN",
      name: "Sabyasachi Mukherjee",
      describe:
        "A high-end designer known for his exquisite bridal and couture collections, combining vintage, royal, and traditional Indian styles.",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_rLF9UnYV1ynuwghfUI7dMqTwZqWrl39oaO8WtSg4HpTlPgeQOObYHRh9R5wP4Q743FjQIdrldCbZ8gc8BxC1HyM6bxUiWlaNJ1mPUk",
      category: "WOMEN",
      name: "Neeta Lulla",
      describe:
        "She is known for designing costumes for Bollywood movies, using a blend of modern and traditional styles, often drawing inspiration from nature.",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhq5w3mp0M3E5egXSSKMkcbOk_FToDO_PCg&s",
      category: "WOMEN",
      name: "Anamika Khanna",
      describe:
        "A designer who combines traditional Indian clothing with modern styles, and she was the first Indian woman to showcase her work at Paris Fashion Week.",
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNDsYxHPuSS4c3HYnuhIc1yr42qecSs1AqFWil3v4XnNKsEkZo",
      category: "WOMEN",
      name: "Stella McCartney",
      describe:
        "She is a designer known for creating stylish, eco-friendly fashion. Her brand focuses on sustainability and using cruelty-free materials in her designs.",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoNg2FD6B9YJNRH6ObbUxKjSkqtoW74cB-PdVpG1IWcowjmKjr",
      category: "MEN",
      name: "Calvin Klein",
      describe:
        "He is famous for creating minimalist, elegant clothing. His brand is known for simple, classic designs, including iconic jeans, underwear, and fragrances.",
    },
  ];

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
