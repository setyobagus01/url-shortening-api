import React, { useRef, useState } from "react";

function ShortenedLink({ shortenlink }) {
  const shortenRef = useRef(null);
  const [copied, setCopied] = useState(null);

  function handleClipboard() {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(shortenRef.current);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    setCopied("Copied!");
  }

  const styleButton = {
    background: copied ? "hsl(257, 27%, 26%)" : "var(--bg-button)",
  };

  return (
    <div className="shortened-url">
      <span className="url-name">
        {shortenlink === undefined ? "No Links" : shortenlink.url}
      </span>
      <div className="line-url"></div>
      <span ref={shortenRef} className="shortlink">
        {shortenlink === undefined
          ? "No Shorten"
          : `https://rel.ink/${shortenlink.hashid}`}
      </span>
      <button
        style={styleButton}
        onClick={handleClipboard}
        className="copy-url"
      >
        {copied ? copied : "Copy"}
      </button>
    </div>
  );
}

export default ShortenedLink;
