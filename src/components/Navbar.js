import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo1.png';
import { useNavigate } from 'react-router-dom';
import { useLocalState } from '../pages/utils/useLocalStorage';
import ajax from '../pages/Services/FetchService';


function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [jwt, setJwt] = useLocalState("", "jwt")
  const [user, setUser] = useLocalState("", "user")

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Event listener to handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (jwt)
      ajax("/api/users/details", "GET", jwt)
        .then((response) => {
          setUser(JSON.parse(response.message))
        }).catch(e => {
          console.log(e);
        });
  }, [jwt])

  let navigate = useNavigate();

  function logout() {
    setUser("")
    setJwt("")
    window.location.href = "/"
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Profit Pal Logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link> {/* Add this line for the Home link */}
          <Link to="/create-report">Create Report</Link>
          <Link to="/reports">My Reports</Link>
        </div>
      </div>
      <div className="user-info" ref={dropdownRef}>
        <span className="user-email">
          {
            user ?
              <>{user.email}
                {user.subscriptionType == 0 ?
                  <button className="premium-button" onClick={() => navigate('/get-premium')}>
                    Get Premium
                  </button>
                  : <></>}</> :
              <></>
          }
        </span>

        <div className="hamburger-icon" onClick={toggleDropdown}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li><Link to="/account-settings">Account Settings</Link></li>
            <li><Link to="/manage-subscription">Manage Subscription</Link></li>
            <li><div onClick={() => {
              logout()
            }}>Logout</div></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
