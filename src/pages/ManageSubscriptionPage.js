import React from 'react';
import './ManageSubscriptionPage.css'; // Make sure to create the corresponding CSS file

function ManageSubscriptionPage() {
  // Example data - replace this with your actual subscription data
  const subscriptions = [
    { id: '#1097', status: 'Active', nextPayment: 'November 27, 2021', total: '$15.00 / month' },
    { id: '#1835', status: 'Active', nextPayment: 'October 27, 2022', total: '$10.00 / year' }
  ];

  return (
    <div className="manage-subscription-container">
      <h1>Subscriptions</h1>
      <table className="subscriptions-table">
        <thead>
          <tr>
            <th>Subscription</th>
            <th>Status</th>
            <th>Next payment</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={subscription.id}>
              <td>{subscription.id}</td>
              <td>{subscription.status}</td>
              <td>{subscription.nextPayment}</td>
              <td>{subscription.total}</td>
              <td><button className="view-details-button">View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageSubscriptionPage;
