import { combineReducers } from 'redux';
import QuestionReducer from './questions';
import AnswerReducer from './answers';
import CommentReducer from './comments';
import TopicReducer from './topics';
import TopicQuestionReducer from './topicQuestions';
import UserTopicReducer from './userTopics';

const EntityReducer = combineReducers({
  questions: QuestionReducer,
  answers: AnswerReducer,
  comments: CommentReducer,
  topics: TopicReducer,
  topicQuestions: TopicQuestionReducer,
  userTopics: UserTopicReducer,
});

export default EntityReducer;
