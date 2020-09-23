import React from "react";
import { ReactComponent as FooterBg } from "../../images/bgboostmobile.svg";

function Boost() {
  return (
    <section className="boost-container">
      <FooterBg />
      <div className="boost-content">
        <h2>Boost your links today</h2>
        <button className="top-button">Get Started</button>
      </div>
    </section>
  );
}

export default Boost;
