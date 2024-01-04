// Base API URl
const apiBase = "https://api.scryfall.com/cards";
// The three to five-letter set code. mid for Midnight Hunt
const set = "/mid/";
// To get Image need to specify format
const dataFormat = "/?format=image";

//More on the API: https://scryfall.com/docs/api/cards/collector;
const fetchData = async (setArtArray, card, index) => {
  // Effect function
  try {
    // Fetch API to call first cards data
    const response = await fetch(apiBase + set + card + dataFormat, {
      mode: "cors",
    });

    // Get the image data as a Blob
    const imageBlob = await response.blob();
    const imageUrl = URL.createObjectURL(imageBlob);
    //updating the array using spread operator
    setArtArray((prevArray) => [
      ...prevArray.slice(0, index), //Copying elements before the index
      imageUrl, // replace index with imageUrl
      ...prevArray.slice(index + 1), // Copying elements after the index
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchData };
