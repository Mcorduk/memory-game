import { useEffect, useState } from "react";
import cardback from "./assets/images/card-back-default.png";

export default function Token() {
  const [token, setToken] = useState({
    name: "",
    id: "",
    set: "",
    image: cardback,
    toggled: false,
  });

  // Fetch API
  useEffect(
    () => {
      // Call fetchData, pass setArt as argument to be able to use the state func
      CARDS.map((card, index) => fetchData(setCards, card, index));

      return () => {
        //Cleanup code
      };
    },
    // My Dependency Array
    [], // FIXME  For now only on initial load
  );
  return (
    <button onClick={shuffleCards} id={card.id}>
      <img
        onClick={() => {
          if (card.checked === true) {
            resetScore();
          } else {
            checkCard(card, index);
            incrementCurrentScore();
          }

          shuffleCards();
        }}
        src={card.image}
        className="card"
        alt="MTG Card Image"
      />
    </button>
  );
}
