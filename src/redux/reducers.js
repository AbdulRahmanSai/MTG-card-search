import { SET_QUERY, SET_RESULTS  } from "./actions";

const initialState = {
  query: {},
  results: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      console.log("Action Payload: ", action.payload); // Debugging
      return { ...state, query: action.payload };
    case SET_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default rootReducer;