import React from "react";

function ShortenedLink({ shortenlink }) {
  return (
    <div className="shortened-list">
      <div className="shortened-url">
        <span className="url-name">
          {shortenlink === undefined ? "No Links" : shortenlink.url}
        </span>
        <div className="line-url"></div>
        <span className="shortlink">
          {shortenlink === undefined
            ? "No Shorten"
            : `https://rel.ink/${shortenlink.hashid}`}
        </span>
        <button className="copy-url">Copy</button>
      </div>
    </div>
  );
}

export default ShortenedLink;
