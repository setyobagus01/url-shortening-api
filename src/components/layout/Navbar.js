import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="menu-list">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <ul className="menu-list">
        <li>Login</li>
        <li id="signup-button">Sign Up</li>
      </ul>
    </nav>
  );
}

export default Navbar;
