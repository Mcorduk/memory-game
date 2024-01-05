import { useEffect, useState } from "react";
import { CARDS } from "./CARDS";
import { fetchData } from "./api";
import cardback from "./assets/images/card-back-default.png";
import "./assets/styles/App.css";
import Card from "./components/Card";
import Header from "./components/Header";
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
  const incrementCurrentScore = () => {
    setScores((prevScores) => ({
      ...prevScores,
      currentScore: prevScores.currentScore + 1,
    }));
  };

  const resetScore = () => {
    setScores((prevScores) => ({
      ...prevScores,
      currentScore: 0,
    }));
    resetCards();
  };

  const resetCards = () => {
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        checked: false,
      })),
    );
  };

  //Shuffle cards using shuffle func in utils, pass it as prop to card components
  const shuffleCards = () => {
    setCards((prevCards) => shuffle([...prevCards]));
  };
  //Takes a card object and it's index in the cards component
  const checkCard = (card, index) => {
    if (!card.checked) {
      setCards((prevArray) => [
        ...prevArray.slice(0, index), //Copying elements before the index
        {
          ...card,
          checked: true,
        }, // replace index with imageUrl
        ...prevArray.slice(index + 1), // Copying elements after the index
      ]);
    } else {
      resetScore();
    }
  };

  return (
    <>
      <Header scores={scores} />
      <main>
        {cards.map((card, index) => (
          // FIXME Key usage here is wrong
          <Card
            shuffleCards={shuffleCards}
            checkCard={checkCard}
            incrementCurrentScore={incrementCurrentScore}
            resetScore={resetScore}
            card={card}
            key={Math.random()}
            index={index}
          />
        ))}
      </main>
    </>
  );
}

export default App;
