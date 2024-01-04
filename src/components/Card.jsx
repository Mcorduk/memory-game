export default function Card({ src, handleClick }) {
  return (
    <button onClick={handleClick}>
      <img
        onClick={handleClick}
        src={src}
        className="card"
        alt="MTG Card Image"
      />
    </button>
  );
}
