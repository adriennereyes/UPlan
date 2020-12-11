import React from "react";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { toast } from 'react-toastify';
import "./Navbar.css";

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
      toast("See you next time", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    //setting up navbar. adding the links that directs to the respective path
    // when the item is clicked on
    <nav>
      <Link style={navStyle} to="/">
        <h3 id="title"><FaTasks />UPlan</h3>
      </Link>
      <ul className="nav-links">
        {!isAuthenticated ? (
          <Link style={navStyle} to="/login">
            <li>Login</li>
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
