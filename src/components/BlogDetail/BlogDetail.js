import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../../Config/BlogData'; // Import blog data
import './BlogDetail.css';

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

      <section>
        <h2>Excerpt</h2>
        <p>{blog.excerpt}</p>
      </section>

      <section>
        <h2>Details</h2>
        <p>{blog.details}</p>
      </section>

      <section>
        <h2>Latest Fashion Trends</h2>
        <p>{blog.latestFashionTrends}</p>
      </section>

      <section>
        <h2>Behind the Scenes</h2>
        <p>{blog.behindTheScenes}</p>
      </section>

      <section>
        <h2>Fashion Styling Tips</h2>
        <p>{blog.fashionStylingTips}</p>
      </section>

      <section>
        <h2>DIY Fashion Hacks</h2>
        <p>{blog.diyFashionHacks}</p>
      </section>

      <section>
        <h2>Color &amp; Fabric Guide</h2>
        <p>{blog.colorFabricGuide}</p>
      </section>

      <section>
        <h2>Personal Journey</h2>
        <p>{blog.personalJourney}</p>
      </section>

      <section>
        <h2>Fashion History &amp; Culture</h2>
        <p>{blog.fashionHistoryCulture}</p>
      </section>

      <section>
        <h2>Sustainable &amp; Ethical Fashion</h2>
        <p>{blog.sustainableEthicalFashion}</p>
      </section>
    </div>
  );
};

export default BlogDetail;
