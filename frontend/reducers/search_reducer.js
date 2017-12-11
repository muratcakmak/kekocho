import merge from 'lodash/merge';
import { SEND_SEARCH } from '../actions/question_actions';

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
