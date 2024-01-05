import { useEffect, useState } from "react";
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
      <div>
        <img
          src={isDarkMode ? card.image.back : card.image.front}
          className="card"
          alt="MTG Card Image"
        />
      </div>
    </button>
  );
}
