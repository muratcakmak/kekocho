import { combineReducers } from 'redux';
import QuestionReducer from './question_reducer';
import AnswerReducer from './answer_reducer';

const EntityReducer = combineReducers({
  questions: QuestionReducer,
  answers: AnswerReducer
});

export default EntityReducer;
