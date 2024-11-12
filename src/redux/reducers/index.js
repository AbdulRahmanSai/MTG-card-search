import { combineReducers } from 'redux';
import searchQueryReducer from './searchQuery';

const rootReducer = combineReducers({
  searchQuery: searchQueryReducer, // Ensure this matches your state path
});

export default rootReducer;
