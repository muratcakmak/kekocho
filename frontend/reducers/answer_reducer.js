import merge from 'lodash/merge';
import difference from 'lodash/difference';

import { RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';

const defaultState = { };

const AnswerReducer = (state = defaultState, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return merge({}, state, action.answers);
    case RECEIVE_ANSWER:
    //TODO: Work
      newState = merge({}, state);
      newState[action.answer.id] = action.answer;
      return newState;
    case REMOVE_ANSWER:

      newState = merge({}, state);
      delete newState[action.answer.id];
      return newState;
    default:
      return state;
  }
};

export default AnswerReducer;
