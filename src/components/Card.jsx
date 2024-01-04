export default function Card({ card, shuffleCards, checkCard, index }) {
  return (
    <button onClick={shuffleCards} id={card.id}>
      <img
        onClick={() => {
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
