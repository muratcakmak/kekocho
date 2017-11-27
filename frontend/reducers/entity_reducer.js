import { combineReducers } from 'redux';
import QuestionReducer from './question_reducer';
import AnswerReducer from './answer_reducer';
import CommentReducer from './comment_reducer';
import TopicReducer from './topic_reducer';
import TopicQuestionReducer from './topic_question_reducer';
import UserTopicReducer from './user_topic_reducer';

const EntityReducer = combineReducers({
  questions: QuestionReducer,
  answers: AnswerReducer,
  comments: CommentReducer,
  topics: TopicReducer,
  topicQuestions: TopicQuestionReducer,
  userTopics: UserTopicReducer,
});

export default EntityReducer;
