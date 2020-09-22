import React from "react";

function Navbar({ active }) {
  return (
    <nav className={active ? "navbar-open" : null}>
      <ul className="menu-list">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className="line"></div>
      <ul className="menu-list">
        <li>Login</li>
        <li id="signup-button">Sign Up</li>
      </ul>
    </nav>
  );
}

export default Navbar;
