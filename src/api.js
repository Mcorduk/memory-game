// Base API URl
const apiBase = "https://api.scryfall.com/cards";

// To get Image need to specify format
const dataFormat = "?format=image&version=png";

const darkModeParameter = "&face=back";

//API function
//More on the API: https://scryfall.com/docs/api/cards/collector;
// setArtArray: setter state variable for image sources
// Set: the three to five-letter set code. mid for Midnight Hunt
// index: index of the artArray variable
//token (optional): Make true for fetching token data
const fetchData = async (
  setterFunction,
  card,
  index,
  isDarkMode,
  token = false,
) => {
  // Effect function
  try {
    // Fetch API to call first cards data
    const response = await fetch(
      `${apiBase}/${card.set}/${card.id}/${dataFormat}${
        // if Is Dark Mode, add extra parameter to get night version of the card
        isDarkMode ? darkModeParameter : ""
      }`,
      {
        mode: "cors",
      },
    );

    // Get the image data as a Blob
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    //Set a new array for non token cards
    if (token === false) {
      //updating the set array using spread operator
      setterFunction((prevArray) => [
        ...prevArray.slice(0, index), //Copying elements before the index
        {
          name: card.name,
          set: card.set,
          id: card.id,
          image: imageUrl,
          checked: false,
        }, // replace index with imageUrl
        ...prevArray.slice(index + 1), // Copying elements after the index
      ]);
      //Set a new token object for Token
    } else {
      setterFunction((prevToken) => ({
        ...prevToken,
        image: imageUrl,
      }));
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchData };
