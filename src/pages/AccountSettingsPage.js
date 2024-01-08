import React, { useState } from 'react';
import './AccountSettingsPage.css'; // Make sure to create a corresponding CSS file

function AccountSettingsPage() {
  const [email, setEmail] = useState(''); // Initialize state for email
  const [password, setPassword] = useState(''); // Initialize state for password

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSaveChanges = () => {
    // Logic to save changes to the user's account
    console.log('Saved changes:', email, password);
    // You would typically make an API call here to update the user's account
  };

  return (
    <div className="account-settings-container">
      <h1>Account Settings</h1>
      <div className="settings-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
}

export default AccountSettingsPage;
