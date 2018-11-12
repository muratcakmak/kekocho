import merge from 'lodash/merge';
import { SEND_SEARCH } from '../actions/questions';

const defaultState = { };

const SearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEND_SEARCH:
      return merge({}, action.searchResult.Question);
    default:
      return state;
  }
};

export default SearchReducer;
