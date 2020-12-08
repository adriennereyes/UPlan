import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

//setting a variable for the style that can be applied to the objects
const navStyle = {
  color: "white",
};

function Nav() {
  //Checks if the user is authenticated (Logged in)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (bool) => {
    setIsAuthenticated(bool);
  };

  const checkAuth = async () => {
    try {
      const response = await fetch("http://localhost:3001/verify", {
        method: "POST",
        headers: { token: localStorage.token },
      });

      const parsedResponse = await response.json();

      parsedResponse === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    //setting up navbar. adding the links that directs to the respective path
    // when the item is clicked on
    <nav>
      <Link style={navStyle} to="/">
        <h3 id="title">UPlan</h3>
      </Link>
      <ul className="nav-links">
        {/* Change login link depending on authentication state */}
        {isAuthenticated ? (
          <Link style={navStyle} to="/login">
            <li>Log Out</li>
          </Link>
        ) : (
          <Link style={navStyle} to="/login">
            <li>Log In</li>
          </Link>
        )}
        <Link style={navStyle} to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
