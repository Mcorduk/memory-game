import React from "react";
import dayOverlayImage from "../assets/images/day-animation.png";
import nightOverlayImage from "../assets/images/night-animation.png";

const OverlayImage = ({ isDarkMode }) => {
  return isDarkMode ? (
    <div className="overlay-image">
      <img src={dayOverlayImage} alt="Overlay Image" />
    </div>
  ) : null;
};

export default OverlayImage;
