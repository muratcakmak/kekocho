import merge from 'lodash/merge';

import { RECEIVE_FEED_DATA } from '../actions/feed_actions';

const defaultState = { };

const UserTopicReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return merge({}, state, action.userTopics);
    default:
      return state;
  }
};

export default UserTopicReducer;
