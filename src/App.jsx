import { useEffect, useRef, useState } from "react";
import { CARDS } from "./CARDS";
import "./assets/App.css";
import cardback from "./assets/card-back-default.png";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [art, setArt] = useState([cardback]);

  // Base API URl
  const apiBase = "https://api.scryfall.com/cards";
  // The three to five-letter set code. mid for Midnight Hunt
  const set = "/mid/";
  // To get Image need to specify format
  const dataFormat = "/?format=image";

  // Fetch API
  useEffect(
    () => {
      //More on the API: https://scryfall.com/docs/api/cards/collector
      const fetchData = async () => {
        // Effect function
        try {
          // Fetch API to call first cards data
          const response = await fetch(apiBase + set + CARDS[0] + dataFormat, {
            mode: "cors",
          });
          // Get the image data as a Blob
          const imageBlob = await response.blob();
          const imageUrl = URL.createObjectURL(imageBlob);
          setArt(imageUrl);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      // Call fetchData
      fetchData();

      return () => {
        //Cleanup code
      };
    },
    // My Dependency Array
    [], // FIXME  For now only on initial load
  );

  return (
    <>
      {" "}
      <Card src={art} />
    </>
  );
}

export default App;
