import merge from 'lodash/merge';
import difference from 'lodash/difference';

import { RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';

const defaultState = { };

const AnswerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return merge({}, state, action.answers);
    case RECEIVE_ANSWER:
    debugger
      return merge({}, state, action.newAnswer);
    case REMOVE_ANSWER:
      debugger
      let newState = merge({}, state);
      return newState;
    default:
      return state;
  }
};

export default AnswerReducer;
