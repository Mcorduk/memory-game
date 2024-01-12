// Base API URl
const apiBase = "https://api.scryfall.com/cards";

// To get Image need to specify format
const formatParameter = "?format=image&version=png";

const darkModeParameter = "&face=back";

const setCardsImage = (
  setterFunction,
  card,
  index,
  frontImageUrl,
  backImageUrl = "",
) => {
  //updating the set array using spread operator
  setterFunction((prevArray) => [
    ...prevArray.slice(0, index), //Copying elements before the index
    {
      name: card.name,
      set: card.set,
      id: card.id,
      image: { front: frontImageUrl, back: backImageUrl },
      checked: false,
    }, // replace index with imageUrl
    ...prevArray.slice(index + 1), // Copying elements after the index
  ]);
};

const setTokenImage = (setterFunction, frontImageUrl, backImageUrl = "") => {
  setterFunction((prevToken) => ({
    ...prevToken,
    image: { front: frontImageUrl, back: backImageUrl },
  }));
};

//API function
//More on the API: https://scryfall.com/docs/api/cards/collector;
// setArtArray: setter state variable for image sources
// Set: the three to five-letter set code. mid for Midnight Hunt
// index: index of the artArray variable
//token (optional): Make true for fetching token data
const fetchData = async (setterFunction, card, index, token = false) => {
  // Effect function
  try {
    // Fetch front image
    const frontResponse = await fetch(
      `${apiBase}/${card.set}/${card.id}/${formatParameter}`,
      {
        mode: "cors",
      },
    );

    // Fetch back image
    const backResponse = await fetch(
      `${apiBase}/${card.set}/${card.id}/${formatParameter}${darkModeParameter}`,
      {
        mode: "cors",
      },
    );

    // Get the front image data as a Blob
    const frontImageBlob = await frontResponse.blob();
    const frontImageUrl = URL.createObjectURL(frontImageBlob);

    // Get the back image data as a Blob
    const backImageBlob = await backResponse.blob();
    const backImageUrl = URL.createObjectURL(backImageBlob);
    //Set a new array for non token cards
    if (token === false) {
      setCardsImage(setterFunction, card, index, frontImageUrl, backImageUrl);
    } else {
      //Set a new token object for Token
      setTokenImage(setterFunction, frontImageUrl, backImageUrl);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchData };
