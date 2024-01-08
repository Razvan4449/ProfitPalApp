import React from 'react';
import './MyReportsPage.css'; // Make sure to create the corresponding CSS file
import { Link } from 'react-router-dom';


function MyReportsPage() {
  // Example data - replace this with your actual reports data
  const reports = [
    { title: 'Cost Management...', type: 'Budget edit...', runAt: 'Sep 12, 2023', createdBy: 'Hansen Lu', sourceTemplate: 'Cost Manage...', schedule: true, recipients: 8 },
    // ... other reports
  ];

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
              <th>Title</th>
              <th>Type</th>
              <th>Run at</th>
              <th>Created by</th>
              <th>Source template</th>
              <th>Schedule</th>
              <th>Recipients</th>
              <th>Settings</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.title}</td>
                <td>{report.type}</td>
                <td>{report.runAt}</td>
                <td>{report.createdBy}</td>
                <td>{report.sourceTemplate}</td>
                <td>{report.schedule ? 'Yes' : 'No'}</td>
                <td>{report.recipients}</td>
                <td>{/* settings icon here */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyReportsPage;
