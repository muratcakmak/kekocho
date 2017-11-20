import merge from 'lodash/merge';

import { RECEIVE_FEED_DATA } from '../actions/feed_actions';
import { RECEIVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_TOPIC } from '../actions/topic_actions';

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
      newState[action.topic.id] = action.topic;
      return newState;
    default:
      return state;
  }
};

export default TopicReducer;
