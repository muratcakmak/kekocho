import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session';

const defaultState = [];

const sessionErrors = (state = defaultState, action) => {
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

export default sessionErrors;
