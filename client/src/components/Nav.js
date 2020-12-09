import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

//setting a variable for the style that can be applied to the objects
const navStyle = {
  color: "white",
};

function Nav({ setAuth, isAuthenticated }) {
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    //setting up navbar. adding the links that directs to the respective path
    // when the item is clicked on
    <nav>
      <Link style={navStyle} to="/">
        <h3 id="title">UPlan</h3>
      </Link>
      <ul className="nav-links">
        {!isAuthenticated ? (
          <Link style={navStyle} to="/login">
            <li>Log in</li>
          </Link>
        ) : (
          <Link style={navStyle} to="#">
            <li onClick={(e) => handleLogout(e)}>Logout</li>
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
