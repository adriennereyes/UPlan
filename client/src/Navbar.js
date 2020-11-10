import React from "react";
import "./navbar.css";

export default function Navbar() {
  function btnClick() {
    console.log("button clicked");
  }
  return (
    <nav>
      <ul class="nav-menu">
        <li class="logo">
          <a href="#">UPlan</a>
        </li>
        <li class="item">
          <a href="#">About</a>
        </li>
        <li class="item">
          <a href="#">Contact</a>
        </li>
        <li class="item btn">
          <a href="#">Login</a>
        </li>
        <li class=" item btn">
          <a href="#">Sign Out</a>
        </li>
        <li class="mobile">
          <div>
            <span class="burger"></span>
            <span class="burger"></span>
            <span class="burger"></span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
