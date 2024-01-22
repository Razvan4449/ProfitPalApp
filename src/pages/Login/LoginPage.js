import React, { useState } from 'react';
import './LoginPage.css';
import { useLocalState } from '../utils/useLocalStorage';
import ajax from '../Services/FetchService';
import { Link } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jwt, setJwt] = useLocalState("", "jwt")
  const [user, setUser] = useLocalState("", "user")
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    ajax("/api/auth/signin?email=" + email + "&password=" + password, "GET")
      .then((response) => {
        let jwt = response.message;
        if (jwt) {
          setJwt(jwt);
          window.location.href = "/"
        }
        setErrorMessage(response.error)
      }).catch(e => {
        console.log(e);
      });

    event.preventDefault();
  };


  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
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
          <Link to="/register">
            Register now
          </Link>
          <h3>{errorMessage}</h3>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
