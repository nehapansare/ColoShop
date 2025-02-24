import React from 'react';
import { Link } from 'react-router-dom'; 
import './Blog.css';
import blogPosts from '../../Config/BlogData';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Blog = () => (
    <div>
        <Navbar/>
  <div className="blog-container">
    {blogPosts.map(({ id, date, author, title, excerpt, image }) => (
      <div className="blog-card" key={id}>
        <div className="image-container4">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <div className="meta">{date} | {author}</div>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <Link to={`/blogdetail/${id}`}>
            <button className='blog-btn'>Read More</button>
          </Link>
        </div>
      </div>
    ))}
  </div>
 <Footer/>
  </div>
);

export default Blog;
