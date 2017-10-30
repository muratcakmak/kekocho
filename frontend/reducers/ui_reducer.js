import merge from 'lodash/merge';
import { ADD_ASK_QUESTION_MODAL } from '../actions/session_actions';

const defaultState = {modal: {
  show: false,
  }
};

const UIReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ASK_QUESTION_MODAL":
      return {modal: action.modal};
    case "REMOVE_ASK_QUESTION_MODAL":
      return {modal: action.modal};
    default:
      return defaultState;
  }
};

export default UIReducer;
