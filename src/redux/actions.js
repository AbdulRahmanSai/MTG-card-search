export const SET_QUERY = "SET_QUERY";
export const SET_RESULTS = "SET_RESULTS";

export const setQuery = (query) => ({ type: SET_QUERY, payload: query });
export const setResults = (results) => ({ type: SET_RESULTS, payload: results });