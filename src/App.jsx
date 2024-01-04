import { useEffect, useState } from "react";
import { CARDS } from "./CARDS";
import { fetchData } from "./api";
import "./assets/App.css";
import cardback from "./assets/card-back-default.png";
import Card from "./components/Card";
import { shuffle } from "./utils";

function App() {
  const [cards, setCards] = useState(
    //Fill the Initial
    new Array(10).fill({
      name: "",
      id: "",
      set: "",
      image: cardback,
      checked: false,
    }),
  );
  // scores state variable, keep currentScore and bestScore in the game
  const [scores, setScores] = useState({ currentScore: 0, bestScore: 0 });

  // Fetch API
  useEffect(
    () => {
      // Call fetchData, pass setArt as argument to be able to use the state func
      CARDS.map((card, index) => fetchData(setCards, card, index));

      return () => {
        //Cleanup code
      };
    },
    // My Dependency Array
    [], // FIXME  For now only on initial load
  );

  //Check and update the best score
  useEffect(() => {
    function updateBestScore() {
      if (scores.currentScore > scores.bestScore) {
        setScores((prevScores) => ({
          ...prevScores,
          bestScore: prevScores.currentScore,
        }));
      }
    }
    updateBestScore();
  }, [scores.currentScore, scores.bestScore]);

  //Function to increment the current score using setScores, this will trigger
  //a re-render as well as bestScore useEffect
  const incrementCurrentScore = () =>
    setScores((prevScores) => ({
      ...prevScores,
      currentScore: prevScores.currentScore + 1,
    }));

  //Shuffle cards using shuffle func in utils, pass it as prop to card components
  function shuffleCards() {
    setCards((prevCards) => shuffle([...prevCards]));
  }

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
        {cards.map((card) => (
          // FIXME Key usage here is wrong
          <Card
            id={card.id}
            handleClick={shuffleCards}
            src={card.image}
            key={Math.random()}
          />
        ))}
      </main>
    </>
  );
}

export default App;
