import React, { useState } from 'react';
import './CreateReportPage.css';
import { Link } from 'react-router-dom';
import { useLocalState } from '../utils/useLocalStorage';
import ajax from '../Services/FetchService';

function CreateReportPage() {
  const [jwt, setJwt] = useLocalState('', 'jwt');
  const [user, setUser] = useLocalState('', 'user');
  const [symbol, setSymbol] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  function getCompanies() {
    ajax('/api/companies?symbol=' + symbol, 'GET', jwt)
      .then((response) => {
        setCompanies(JSON.parse(response.message));
        console.log(companies[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function createReport() {
    console.log(selectedSymbol);
    if (selectedSymbol) {
      setIsLoading(true);
      ajax('/api/report/generate?symbol=' + symbol, 'POST', jwt)
        .then((response) => {
          setIsLoading(false);
          if (response.error) {
            setError(response.error);
          } else {
            let parsedResponse = JSON.parse(response.message);
            window.location.href = '/report/' + parsedResponse.id;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setError('Select a company symbol');
    }
  }

  return (
    <div className="create-report-container">
      <div className="create-report-card">
        <input
          type="text"
          placeholder="Enter Company Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <button type="button" className="generate-btn" onClick={() => getCompanies()}>
          Find Companies
        </button>
        <select id="companyName" value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
          <option value="">Select the company symbol</option>
          {companies ? (
            companies.map((company) => (
              <option key={company.symbol} value={company.symbol}>
                {company.symbol}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
        <div className="error-message">{error}</div>
      </div>

      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {user.subscriptionType && user.subscriptionDeadline > new Date().toJSON() ? (
            <div className="options-buttons">
              <button type="button" onClick={() => createReport()}>
                Generate report
              </button>
            </div>
          ) : (
            <div className="options-buttons">
              <button type="button" onClick={() => createReport()}>
                Try for Free
              </button>
              <Link to="/get-premium" className="premium-button">
                Get Premium
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CreateReportPage;
