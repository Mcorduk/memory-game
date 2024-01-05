export default function Header({ scores }) {
  return (
    <header>
      <div>
        <h1>The Midnight Hunt</h1>
        <h2> Memory Game</h2>
      </div>
      <p className="how-to-play">
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <div className="scores">
        <span className="current-score">
          Current Score: {scores.currentScore}
        </span>
        <span className="best-score">Best Score: {scores.bestScore}</span>
      </div>
    </header>
  );
}
