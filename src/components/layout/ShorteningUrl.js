import React, { useState, useContext } from "react";
import { ReactComponent as ShortenMobileIcon } from "../../images/bgshortenmobile.svg";

import { ShortenContext } from "../../ShortenContext";

function ShorteningUrl() {
  const [url, setUrl] = useState("");
  const createLinks = useContext(ShortenContext);

  function handleShortening(e) {
    e.preventDefault();
    createLinks(url);
    console.log(url);
  }

  return (
    <>
      <div className="shorten-container">
        <ShortenMobileIcon className="bg-shorten" />
        <form onSubmit={handleShortening}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Shorten a link here..."
          />
          <button id="shorten">Shorten it!</button>
        </form>
      </div>
    </>
  );
}

export default ShorteningUrl;
