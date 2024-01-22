import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Ensure the CSS file is correctly linked
import { useLocalState } from '../utils/useLocalStorage';
import ajax from '../Services/FetchService';
import { rule1, rule2, rule3 } from '../utils/ruleValidators';

function HomePage() {
  const [jwt, setJwt] = useLocalState('', 'jwt');
  const [reports, setReports] = useState([]);

  useEffect(() => {
    ajax('/api/report/getPopular', 'GET', jwt)
      .then((response) => {
        setReports(JSON.parse(response.message));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="homepage-container">
      <div className="hero-image-container">
        <img
          src="https://www.sarwa.co/blog/wp-content/uploads/2021/10/Quote-3-1.png"
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
          <table className="stocks-table">
            <thead>
              <tr>
                <th>Company Symbol</th>
                <th>Rule No.1</th>
                <th>Rule No.2</th>
                <th>Rule No.3</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.companySymbol}</td>
                  <td className={rule1(report.rule1) ? 'passed' : 'notPassed'}>
                    {rule1(report.rule1) ? 'Passed' : 'Not passed'}
                  </td>
                  <td className={rule2(report.rule2) ? 'passed' : 'notPassed'}>
                    {rule2(report.rule2) ? 'Passed' : 'Not passed'}
                  </td>
                  <td className={rule3(report.rule3) ? 'passed' : 'notPassed'}>
                    {rule3(report.rule3) ? 'Passed' : 'Not passed'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default HomePage;