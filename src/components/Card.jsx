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
            incrementCurrentScore();
          }
          checkCard(card, index);
          shuffleCards();
        }}
        src={card.image}
        className="card"
        alt="MTG Card Image"
      />
    </button>
  );
}
