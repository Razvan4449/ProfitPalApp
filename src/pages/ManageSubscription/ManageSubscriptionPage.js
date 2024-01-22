import React from 'react';
import './ManageSubscriptionPage.css'; // Make sure to create the corresponding CSS file
import { useLocalState } from '../utils/useLocalStorage';
import ajax from '../Services/FetchService';

function ManageSubscriptionPage() {
  const [user, setUser] = useLocalState("", "user")
  const [jwt, setJwt] = useLocalState("", "jwt")


  const subscriptions = [
    { status: user.subscriptionType ? "Active" : "Inactive", nextPayment: user.subscriptionDeadline, total: '$15.00 / month' }
  ];

  function cancelSubscription() {
    ajax("/api/users/cancelSubscription", "PUT", jwt)
      .then((response) => {
        window.location.reload()
      }).catch(e => {
        console.log(e);
      });
  }

  return (
    <div className="manage-subscription-container">
      <h1>Subscriptions</h1>
      <table className="subscriptions-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Next payment</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr className={subscription.id}>
              <td>{subscription.status}</td>
              <td>{subscription.nextPayment}</td>
              <td>{subscription.total}</td>
              <td>{subscription.status == 'Active' ?
                <button className="view-details-button" onClick={() => cancelSubscription()}>Cancel Subscription</button>
                :
                <>
                </>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageSubscriptionPage;
