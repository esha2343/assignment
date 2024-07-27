// src/components/Navbar.js
import React from "react";

const Navbar = () => {


  return (
    <header className="navbar">
      <div className="logo">NAVBAR</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>

      

    </header>
  );
};

export default Navbar;
