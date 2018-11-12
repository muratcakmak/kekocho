import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_UPVOTE, REMOVE_UPVOTE } from '../actions/upvote_actions';

const defaultState = { currentUser: null };

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser } );
    case RECEIVE_UPVOTE:
      newState = merge({}, state);
      newState.currentUser.upvotes.push(action.upvote.answerId);
      return newState;
    case REMOVE_UPVOTE:
      newState = merge({}, state);
      const idx = newState.currentUser.upvotes.indexOf(action.upvote.answerId);
      newState.currentUser.upvotes.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
