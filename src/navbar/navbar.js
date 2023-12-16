import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav class="navbar">
      <a class="logo">NextGrowth Labs</a>
      <ul class="nav-links">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Enterprise</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <button href="#" class="sign-up">
          Sign up
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
