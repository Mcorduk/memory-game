import { useEffect, useState } from "react";
import { TOKEN } from "../CARDS";
import { fetchData } from "../api";
import cardback from "../assets/images/card-back-default.png";

export default function Token({ handleClick, isDarkMode }) {
  const [token, setToken] = useState({
    name: "",
    id: "",
    set: "",
    image: { front: cardback, back: cardback },
    checked: false,
  });

  //Used for animating the card with css on isDarkMode, flipping the card
  const [flipped, setFlipped] = useState(false);

  // Fetch token information
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
    <button onClick={handleClick} id={token.id}>
      <img
        src={isDarkMode ? token.image.back : token.image.front}
        className="card token"
        alt="MTG Card Image"
      />
    </button>
  );
}
