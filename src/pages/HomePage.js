import React from 'react';
import './HomePage.css'; // Ensure the CSS file is correctly linked

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="hero-image-container">
        <img
          src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_650,h_300/https://www.sarwa.co/blog/wp-content/uploads/2021/10/Quote-3-1.png"
          alt="Inspirational Quote"
        />
      </div>
      <section className="content-section">
        <div className="description-box">
          <h1>Welcome to Profit Pal</h1>
          <p>Welcome to Profit Pal 🚀 – your smart assistant in the stock market universe! 🌌</p>
          <p>Our innovative platform utilizes 14 cutting-edge algorithms to analyze market trends and empower your investment decisions.</p>
          <p>📈 Whether you're a seasoned trader or just starting out, Profit Pal offers you a suite of tools to stay ahead of the curve.</p>
          <p>Here's a snapshot of what you can do:</p>
          <ul className="feature-list">
            <li>Create detailed, algorithm-driven reports 📊</li>
            <li>Gain access to real-time data on popular stocks 📉📈</li>
            <li>Try features for free or unlock full potential with premium access 💼</li>
          </ul>
          <p>Jump in and let Profit Pal guide you on your journey to financial growth! 💰🌟</p>
        </div>
        <div className="stocks-box">
          <h2>Popular Stocks</h2>
          <ul>
            <li>Stock 1: $Price</li>
            <li>Stock 2: $Price</li>
            <li>Stock 3: $Price</li>
            <li>Stock 4: $Price</li>
            <li>Stock 5: $Price</li>
            <li>Stock 6: $Price</li>
            <li>Stock 7: $Price</li>
            <li>Stock 8: $Price</li>
            <li>Stock 9: $Price</li>
            <li>Stock 10: $Price</li>
            <li>Stock 11: $Price</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
