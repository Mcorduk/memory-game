import { useEffect, useState } from "react";
import { TOKEN } from "../CARDS";
import { fetchData } from "../api";
import dayAudio from "../assets/audio/day-audio.mp3";
import nightAudio from "../assets/audio/night-audio.mp3";
import cardback from "../assets/images/card-back-default.png";
import nightOverlay from "../assets/images/night-animation.png";
import "../assets/styles/flipAnimation.css";

export default function Token({ handleClick, isDarkMode }) {
  const [token, setToken] = useState({
    name: "",
    id: "",
    set: "",
    image: { front: cardback, back: cardback },
    checked: false,
  });

  // Plays audio on isDarkMode toggles
  function playAudio() {
    if (isDarkMode) {
      new Audio(dayAudio).play();
    }
    if (!isDarkMode) {
      new Audio(nightAudio).play();
    }
  }

  // Fetch token information
  useEffect(
    () => {
      // API call populates our token's necesarry information
      // Passing TOKEN data directly from CARDS as there is only a single token
      fetchData(setToken, TOKEN, 0, true);
      return () => {
        // FIXME Cleanup code
      };
    },
    // My Dependency Array
    [],
  );

  return (
    <>
      <p>Toggle Themes</p>
      <button
        onClick={() => {
          handleClick();
          playAudio();
        }}
        id={token.id}
      >
        <img
          src={isDarkMode ? token.image.back : token.image.front}
          className="card token"
          // Take it from the data otherwise defaults to ""
          alt={`${TOKEN.name} Image`}
        />
        <img
          className={`night-overlay ${!isDarkMode ? "invisible" : ""}`}
          src={nightOverlay}
        ></img>
      </button>
    </>
  );
}
