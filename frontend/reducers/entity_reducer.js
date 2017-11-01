import { combineReducers } from 'redux';
import QuestionReducer from './question_reducer';
import AnswerReducer from './answer_reducer';
import CommentReducer from './comment_reducer';

const EntityReducer = combineReducers({
  questions: QuestionReducer,
  answers: AnswerReducer,
  comments: CommentReducer
});

export default EntityReducer;
