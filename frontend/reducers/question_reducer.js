import merge from 'lodash/merge';
import difference from 'lodash/difference';

import { RECEIVE_QUESTION, REMOVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';
import { RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';

const defaultState = { };

const QuestionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return merge({}, state, action.questions);
    case REMOVE_QUESTION:
      debugger
      newState = merge({}, state);
      delete newState[action.question.id];
      return newState;
    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});
    case RECEIVE_ANSWER:
      return merge({}, state, action.newAnswer.questions );
    case REMOVE_ANSWER:
      debugger
      newState = Object.values(merge({}, state))[0];
      delete newState.answers[action.newAnswer.answers.id];
      return { [Object.keys(state)]: newState };
    default:
      return state;
  }
};

export default QuestionReducer;
