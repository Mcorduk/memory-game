import { useEffect, useState } from "react";
import { TOKEN } from "../CARDS";
import { fetchData } from "../api";
import cardback from "../assets/images/card-back-default.png";

export default function Token() {
  const [token, setToken] = useState({
    name: "",
    id: "",
    set: "",
    image: cardback,
    checked: false,
  });

  // Fetch API
  useEffect(
    () => {
      // API call populates our token's necesarry information
      // Passing TOKEN data directly from CARDS as there is only a single token
      fetchData(setToken, TOKEN, 0, true);
      return () => {
        // FIXME Cleanup code
      };
    },
    // My Dependency Array
    [], // FIXME  token change triggers re-fetch, necessary or not?
  );

  return (
    <button id={token.id}>
      <img src={token.image} className="card token" alt="MTG Card Image" />
    </button>
  );
}
