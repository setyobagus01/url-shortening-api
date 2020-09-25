import React, { useState, useContext } from "react";
import { ReactComponent as ShortenMobileIcon } from "../../images/bgshortenmobile.svg";

import { ShortenContext } from "../../ShortenContext";

function ShorteningUrl() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const createLinks = useContext(ShortenContext);

  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator

  function handleShortening(e) {
    e.preventDefault();

    if (url.match(pattern)) {
      createLinks(url);
      setError("");
    } else {
      setError("Please add a link");
    }

    console.log(url);
  }

  return (
    <div
      className="shorten-container"
      style={{ height: error ? "30vh" : "25vh" }}
    >
      <ShortenMobileIcon className="bg-shorten" />
      <form autoComplete="on" onSubmit={handleShortening}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Shorten a link here..."
        />
        {error ? <span className="error">{error}</span> : null}
        <button id="shorten">Shorten it!</button>
      </form>
    </div>
  );
}

export default ShorteningUrl;
