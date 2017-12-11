import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = [];

const SessionErrorsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors.responseJSON) {
        return action.errors.responseJSON;
      }
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
