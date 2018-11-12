import { RECEIVE_TOPIC_QUESTIONS } from '../actions/topics';

const defaultState = { };

const topicQuestions = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_TOPIC_QUESTIONS:
      return action.topicQuestions;
    default:
      return defaultState;
  }
};

export default topicQuestions;
