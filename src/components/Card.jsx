export default function Card({ src }) {
  return (
    <button>
      <img src={src} className="card" alt="MTG Card Image" />
    </button>
  );
}
