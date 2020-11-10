import React from "react";
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    //setting a variable for the style that can be applied to the objects
    const navStyle = {
        color: 'white'
    };
    return (
        //setting up navbar. adding the links that directs to the respective path
        // when the item is clicked on 
        <nav>
            <Link style={navStyle} to='/'>
                <h3 id = "title">UPlan</h3>
            </Link>
            <ul className="nav-links">
                <Link style = {navStyle} to='/login'>
                    <li>Login</li>
                </Link>
                <Link style = {navStyle} to='/register'>
                    <li>Register</li> 
                </Link>
            </ul>
        </nav>
    )
};

export default Nav;