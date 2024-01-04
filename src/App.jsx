import { useEffect, useState } from "react";
import { CARDS } from "./CARDS";
import { fetchData } from "./api";
import "./assets/App.css";
import cardback from "./assets/card-back-default.png";
import Card from "./components/Card";

function App() {
  const [artArray, setArtArray] = useState(new Array(10).fill(cardback));
  // scores state variable,
  const [scores, setScores] = useState({ currentScore: 0, bestScore: 0 });

  // Fetch API
  useEffect(
    () => {
      // Call fetchData, pass setArt as argument to be able to use the state func
      CARDS.map((card, index) =>
        fetchData(setArtArray, card.id, card.set, index),
      );

      return () => {
        //Cleanup code
      };
    },
    // My Dependency Array
    [], // FIXME  For now only on initial load
  );

  return (
    <>
      <header>
        <div>
          <h1>The Midnight Hunt</h1>
          <h2> Memory Game</h2>
        </div>
        <p>
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
        <div className="scores">
          <span>Current Score: {scores.currentScore}</span>
          <span>Best Score: {scores.bestScore}</span>
        </div>
      </header>
      <main>
        {artArray.map((art) => (
          // FIXME Key usage here is wrong
          <Card src={art} key={Math.random()} />
        ))}
      </main>
    </>
  );
}

export default App;
