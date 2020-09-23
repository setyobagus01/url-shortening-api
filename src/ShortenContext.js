import React, { useReducer } from "react";
import AppReducer from "./reducer/AppReducer";
import axios from "axios";

export const ShortenContext = React.createContext();
export const ShortenLink = React.createContext();

export function ShortenProvider({ children }) {
  const [shortenlinks, dispatch] = useReducer(AppReducer, []);

  async function createLinks(url) {
    const response = await axios
      .post(`https://rel.ink/api/links/`, {
        url: `${url}`,
      })
      .then((res) => res)
      .catch((err) => console.log(err));

    dispatch({
      type: "ADD_SHORTEN",
      payload: response.data,
    });
  }

  console.log(shortenlinks);
  return (
    <ShortenContext.Provider value={createLinks}>
      <ShortenLink.Provider value={shortenlinks}>
        {children}
      </ShortenLink.Provider>
    </ShortenContext.Provider>
  );
}
