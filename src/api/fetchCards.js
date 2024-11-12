import axios from "axios";

export const fetchCards = async (query) => {
  const queryParams = [];

  // Only add parameters to query if they have values
  if (query.type) queryParams.push(`type:${query.type}`);
  if (query.cost) queryParams.push(`cmc=${query.cost}`);
  if (query.power) queryParams.push(`power=${query.power}`);
  if (query.toughness) queryParams.push(`toughness=${query.toughness}`);
  if (query.description) queryParams.push(`oracle:${query.description}`);

  const formattedQuery = queryParams.join("+"); // Join with "+" for Scryfall syntax

  try {
    const response = await axios.get(`https://api.scryfall.com/cards/search?q=${formattedQuery}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};
