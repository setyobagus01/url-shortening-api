import React from "react";
import { ReactComponent as ShortenMobileIcon } from "../../images/bgshortenmobile.svg";

function ShorteningUrl() {
  function handleShortening(e) {
    e.preventDefault();
  }

  return (
    <div className="shorten-container">
      <ShortenMobileIcon className="bg-shorten" />
      <form onSubmit={handleShortening}>
        <input type="text" placeholder="Shorten a link here..." />
        <button id="shorten">Shorten it!</button>
      </form>
    </div>
  );
}

export default ShorteningUrl;
