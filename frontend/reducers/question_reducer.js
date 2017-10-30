import merge from 'lodash/merge';
import { RECEIVE_QUESTION, RECEIVE_ALL_QUESTIONS } from '../actions/question_actions';

const defaultState = { };

const QuestionReducer = (state = defaultState, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      //This is ugly, I need to be more considerate
      return merge({}, state, action.questions.questions, action.questions.answers);
    case RECEIVE_QUESTION:
      return merge({}, state, { questions: action.question });
    default:
      return state;
  }
};

export default QuestionReducer;
