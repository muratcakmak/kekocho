import merge from 'lodash/merge';

import { RECEIVE_FEED_DATA } from '../actions/feed';
import { RECEIVE_QUESTION } from '../actions/questions';
import { RECEIVE_TOPIC, REMOVE_TOPIC } from '../actions/topics';

const defaultState = { };

const TopicReducer = (state = defaultState, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return merge({}, state, action.topics);
    case RECEIVE_QUESTION:
      return merge({}, state, action.question.topics);
    case RECEIVE_TOPIC:
      newState = merge({}, state);
      newState[action.topic.topicId] = { id: action.topic.topicId, name: action.topic.name };
      return newState;
    case REMOVE_TOPIC:
      newState = merge({}, state);
      delete newState[action.questionTopic.topicId];
      return newState;
    default:
      return state;
  }
};

export default TopicReducer;
