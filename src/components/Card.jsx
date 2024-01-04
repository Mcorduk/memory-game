export default function Card({ card, shuffleCards }) {
  return (
    <button onClick={shuffleCards} id={card.id}>
      <img
        onClick={shuffleCards}
        src={card.image}
        className="card"
        alt="MTG Card Image"
      />
    </button>
  );
}
