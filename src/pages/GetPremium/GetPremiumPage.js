import React from 'react';
import './GetPremiumPage.css'; // Make sure you have the correct path

function GetPremiumPage() {
  return (
    <div className="get-premium-container">
      <h1>Premium Plans</h1>
      <p>Unlock full potential with our tailored plans designed for your financial growth.</p>
      <div className="plans-container">
        <div className="plan">
          <h2>Free</h2>
          <p className="price">Use 3 out of 14 algorithms</p>
          <ul>
            <li>Basic algorithm access</li>
            <li>Limited data insights</li>
            <li>Community support</li>
          </ul>
          <button className="plan-button">Use For Free</button>
        </div>
        <div className="plan featured">
          <h2>Premium</h2>
          <p className="price">$15 / month</p>
          <ul>
            <li>Full access to all 14 algorithms</li>
            <li>Detailed, algorithm-driven reports</li>
            <li>Priority customer support</li>
          </ul>
          <button className="plan-button">Get Premium</button>
        </div>
      </div>
    </div>
  );
}

export default GetPremiumPage;
