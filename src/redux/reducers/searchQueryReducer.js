const initialState = {
    query: {
      name: "",
      type: "",
      cost: "",
      description: "",
      power: "",
      toughness: "",
    },
  };
  
  const searchQueryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_QUERY":
        return {
          ...state,
          query: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchQueryReducer;
  