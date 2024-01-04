import { useEffect, useState } from "react";
import { CARDS } from "./CARDS";
import { fetchData } from "./api";
import "./assets/App.css";
import cardback from "./assets/card-back-default.png";
import Card from "./components/Card";

function App() {
  const [artArray, setArtArray] = useState(new Array(10).fill(cardback));

  // Fetch API
  useEffect(
    () => {
      // Call fetchData, pass setArt as argument to be able to use the state func
      CARDS.map((card, index) => fetchData(setArtArray, card, index));

      return () => {
        //Cleanup code
      };
    },
    // My Dependency Array
    [], // FIXME  For now only on initial load
  );

  return (
    <>
      {artArray.map((art) => (
        <Card src={art} key={Math.random()} />
      ))}
    </>
  );
}

export default App;
