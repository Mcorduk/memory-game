import { useEffect, useState } from "react";
import dayOverlayImage from "../assets/images/day-animation.png";
import nightOverlayImage from "../assets/images/night-animation.png";
import "../assets/styles/overlayAnim.css"; // Import the CSS file

const OverlayImage = ({ isDarkMode }) => {
  const [overlayImage, setOverlayImage] = useState("");

  useEffect(() => {
    // Update the overlay image when isDarkMode changes
    setOverlayImage(isDarkMode ? nightOverlayImage : dayOverlayImage);
  }, [isDarkMode]);

  return (
    <div className="overlay-image-container">
      <img src={overlayImage} alt="Overlay Image" />
    </div>
  );
};

export default OverlayImage;
