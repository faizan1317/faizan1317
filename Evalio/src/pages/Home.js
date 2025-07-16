import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Evalio</h1>
          <p>The modern evaluation and assessment platform that simplifies the way you create, manage, and analyze evaluations.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Evalio?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Easy Creation</h3>
              <p>Create evaluations with our intuitive drag-and-drop interface. No technical skills required.</p>
            </div>
            <div className="feature-card">
              <h3>Real-time Analytics</h3>
              <p>Get instant insights and detailed analytics to understand performance and trends.</p>
            </div>
            <div className="feature-card">
              <h3>Secure & Reliable</h3>
              <p>Bank-level security ensures your evaluations and data are always protected.</p>
            </div>
            <div className="feature-card">
              <h3>Multi-format Support</h3>
              <p>Support for various question types, media files, and assessment formats.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;