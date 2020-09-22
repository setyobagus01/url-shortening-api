import React from "react";
import Navbar from "./Navbar";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Hamburger } from "../../images/hamburger.svg";

function Header() {
  const [active, setActive] = React.useState(false);
  return (
    <header>
      <Logo />
      <Hamburger
        className="menu-icon"
        onClick={() => setActive(!active)}
        style={{ width: "30px" }}
      />

      <Navbar active={active} />
    </header>
  );
}

export default Header;
