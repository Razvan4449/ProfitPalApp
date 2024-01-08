import React from 'react';
import './CreateReportPage.css';
import { Link } from 'react-router-dom';

function CreateReportPage() {
    return (
      <div className="create-report-container">
        <div className="create-report-card">
          <select id="companyName">
            <option value="">Select a Company</option>
          </select>
          <button type="button" className="generate-btn">Generate</button>
        </div>
        <div className="options-buttons">
          <button type="button">Try for Free</button>
          <Link to="/get-premium" className="premium-button">Get Premium</Link>
        </div>
      </div>
    );
  }
  
  export default CreateReportPage;
  
