import merge from 'lodash/merge';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';
import { RECEIVE_QUESTION } from '../actions/question_actions';

const defaultState = { };

const comments = (state = defaultState, action) => {
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
    case RECEIVE_QUESTION:
      return merge({}, state, action.question.comments);
    default:
      return state;
  }
};

export default comments;
