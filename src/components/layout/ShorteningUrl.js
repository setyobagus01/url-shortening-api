import React, { useEffect, useState } from "react";
import { ReactComponent as ShortenMobileIcon } from "../../images/bgshortenmobile.svg";
import axios from "axios";

function ShorteningUrl() {
  const [url, setUrl] = useState("");
  const [shortening, setShortening] = useState([]);
  const [shortlink, setShorlink] = useState("");

  function handleShortening(e) {
    e.preventDefault();
    setShorlink("");

    const fetchUrl = async () => {
      return await axios
        .post(`https://rel.ink/api/links/`, {
          url: `${url}`,
        })
        .then((res) => setShortening(res.data))
        .catch((err) => console.log(err));
    };
    fetchUrl();

    setShorlink(`https://rel.ink/${shortening.hashid}`);

    console.log(shortening);
  }

  return (
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
  );
}

export default ShorteningUrl;
