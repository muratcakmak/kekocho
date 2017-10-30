import merge from 'lodash/merge';
import { RECEIVE_ANSWER } from '../actions/answer_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';

const defaultState = { };

const AnswerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      debugger
      return merge({}, state, action.answers);
    case RECEIVE_ANSWER:
      return merge({}, state, { answers: action.answer });
    default:
      return state;
  }
};

export default AnswerReducer;
