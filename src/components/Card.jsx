export default function Card({ src, handleClick }) {
  return (
    <button onClick={handleClick}>
      <img src={src} className="card" alt="MTG Card Image" />
    </button>
  );
}
