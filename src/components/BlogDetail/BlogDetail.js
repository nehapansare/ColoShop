import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../../Config/BlogData'; // Import blog data

const BlogDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const blog = blogPosts.find(post => post.id === parseInt(id)); // Find post by ID

  if (!blog) {
    return <div>Blog post not found!</div>; // Handle invalid ID
  }

  return (
    <div className="blog-detail-container">
      <h1>{blog.title}</h1>
      <p><strong>By:</strong> {blog.author}</p>
      <p><strong>Date:</strong> {blog.date}</p>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.excerpt}</p>
      <p>📖 More content about {blog.title} will be here...</p>
      <p>📖 More content about {blog.details} will be here...</p>
    </div>
  );
};

export default BlogDetail;
