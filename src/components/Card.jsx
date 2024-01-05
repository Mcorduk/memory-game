import { useEffect, useState } from "react";
import wolfOverlay from "../assets/images/werewolf-animation.png";
import "../assets/styles/flipAnimation.css";
export default function Card({
  card,
  shuffleCards,
  checkCard,
  incrementCurrentScore,
  resetScore,
  index,
  isDarkMode,
}) {
  const handleClick = () => {
    if (card.checked === true) {
      resetScore();
    } else {
      checkCard(card, index);
      incrementCurrentScore();
    }
    shuffleCards();
  };

  return (
    <button id={card.id} onClick={handleClick}>
      <img
        src={isDarkMode ? card.image.back : card.image.front}
        className="card"
        alt="MTG Card Image"
      />
      <img
        className={`wolf-overlay ${!isDarkMode ? "invisible" : ""}`}
        src={wolfOverlay}
      ></img>
    </button>
  );
}
