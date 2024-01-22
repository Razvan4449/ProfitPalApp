import React, { useEffect, useState } from 'react';
import './MyReportsPage.css'; // Make sure to create the corresponding CSS file
import { Link } from 'react-router-dom';
import ajax from '../Services/FetchService';
import { useLocalState } from '../utils/useLocalStorage';


function MyReportsPage() {
  const [reports, setReports] = useState([])
  const [jwt, setJwt] = useLocalState("", "jwt")

  useEffect(() => {
    ajax("/api/report/getAll", "GET", jwt)
      .then((response) => {
        setReports(JSON.parse(response.message))
      }).catch(e => {
        console.log(e);
      });
  }, [])

  return (
    <div className="my-reports-container">
      <h1>My Reports</h1>
      <div className="reports-navigation">
        <Link to="/create-report" className="create-report-button">Create report</Link>
      </div>
      <div className="reports-table-container">
        <table className="reports-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Company Symbol</th>
              <th>Report type</th>
              <th>Report link</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr className={index}>
                <td>{report.date.substring(0, 10)}</td>
                <td>{report.companySymbol}</td>
                <td>{report.paidReport ? <>Paid</> : <>Unpaid</>}</td>
                <td><Link to={"/report/" + report.reportId} className="report-button">View report</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyReportsPage;
