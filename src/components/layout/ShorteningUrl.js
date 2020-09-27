import React, { useState, useContext } from "react";
import { ReactComponent as ShortenMobileIcon } from "../../images/bgshortenmobile.svg";
import { ReactComponent as ShortenDesktopIcon } from "../../images/bgshortendesktop.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ShortenContext } from "../../ShortenContext";

function ShorteningUrl() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const { width } = useWindowDimensions();

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
  }

  return (
    <div
      className="shorten-container"
      style={width <= 1024 ? { height: error ? "30vh" : "25vh" } : null}
    >
      {width <= 1024 ? (
        <ShortenMobileIcon className="bg-shorten" />
      ) : (
        <ShortenDesktopIcon className="bg-shorten" />
      )}
      <form autoComplete="on" onSubmit={handleShortening}>
        <div className="input-wrapper">
          <input
            style={{ border: error ? "3px solid var(--bg-error)" : "none" }}
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Shorten a link here..."
          />
          {error ? <span className="error">{error}</span> : null}
        </div>
        <button id="shorten">Shorten it!</button>
      </form>
    </div>
  );
}

export default ShorteningUrl;
