export default function Card({
  card,
  shuffleCards,
  checkCard,
  incrementCurrentScore,
  resetScore,
  index,
}) {
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
        src={card.image.front}
        className="card"
        alt="MTG Card Image"
      />
    </button>
  );
}
