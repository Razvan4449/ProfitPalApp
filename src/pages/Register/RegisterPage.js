import React, { useState } from 'react';
import './RegisterPage.css';
import ajax from '../Services/FetchService';
import { Link } from 'react-router-dom';


function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Email:', email, 'Password:', password);
    let body = {
      "email": email,
      "password": password
    }
    ajax("/api/auth/signup", "POST", "", body)
      .then((response) => {
        if (!response.error) {
          window.location.href = "/login"
        }
        setErrorMessage(response.error)
      }).catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="error-message">
            {errorMessage}
          </div>
          <Link to="/login">
            Already registered? Log in
          </Link>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
