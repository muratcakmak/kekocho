import merge from 'lodash/merge';
import { RECEIVE_ALL_QUESTIONS } from '../actions/session_actions';

const defaultState = { };

const EntityReducer = (state = defaultState, action) => {

  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return merge({}, state, action.entities);
    default:
      return defaultState;
  }
};

export default EntityReducer;
