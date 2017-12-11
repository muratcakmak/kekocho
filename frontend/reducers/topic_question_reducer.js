import { RECEIVE_TOPIC_QUESTIONS } from '../actions/topic_actions';

const defaultState = { };

const TopicQuestionReducer = (state = defaultState, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_TOPIC_QUESTIONS:
      return action.topicQuestions;
    default:
      return defaultState;
  }
};

export default TopicQuestionReducer;
