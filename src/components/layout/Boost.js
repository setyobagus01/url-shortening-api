import React from "react";
import { ReactComponent as FooterBg } from "../../images/bgboostmobile.svg";
import { ReactComponent as FooterBgDesktop } from "../../images/bgboostdesktop.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Boost() {
  const { width } = useWindowDimensions();
  return (
    <section className="boost-container">
      {width <= 1024 ? <FooterBg /> : <FooterBgDesktop />}
      <div className="boost-content">
        <h2>Boost your links today</h2>
        <button className="top-button">Get Started</button>
      </div>
    </section>
  );
}

export default Boost;
