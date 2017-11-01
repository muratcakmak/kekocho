import merge from 'lodash/merge';

import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';

const defaultState = { };

const CommentReducer = ( state = defaultState, action ) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
    }
};

export default CommentReducer;
