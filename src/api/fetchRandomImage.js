import axios from 'axios';

// Function to fetch a random image from the Scryfall API
export const fetchRandomImage = async () => {
  try {
    const response = await axios.get("https://api.scryfall.com/cards/random?version=art_crop");

    // Extract the relevant data from the response
    const cardData = {
      nm: response.data.name, // name
      cmc: response.data.cmc, // Converted Mana Cost
      ty: response.data.type_line, // Card Type
      des: response.data.oracle_text, // Description/Oracle Text
      po: response.data.power, // power
      to: response.data.toughness, // toughness
      imgUrl: response.data.image_uris.art_crop, // Image URL for art_crop version
    };
    return cardData; // Return the data object containing the card details

  } catch (error) {
    console.error("Error fetching random image:", error);
    throw error; // re-throw error to be caught in the calling component
  }
};
