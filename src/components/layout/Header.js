import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Hamburger } from "../../images/hamburger.svg";

function Header() {
  return (
    <header>
      <Logo />
      <Hamburger style={{ width: "30px" }} />
    </header>
  );
}

export default Header;
