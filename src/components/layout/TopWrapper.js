import React from "react";
import { ReactComponent as Illustration } from "../../images/illustrationworking.svg";

function TopWrapper() {
  return (
    <div className="top-container">
      <Illustration className="illustration" />
      <section className="top-content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="top-button">Get Started</button>
      </section>
    </div>
  );
}

export default TopWrapper;
