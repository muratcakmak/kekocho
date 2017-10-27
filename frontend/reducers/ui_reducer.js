import merge from 'lodash/merge';
import { ADD_ASK_QUESTION_MODAL } from '../actions/session_actions';

const defaultState = {modal: {
  show: false,
  }
};

const UIReducer = (state = defaultState, action) => {
  console.log(action.modal);
  switch (action.type) {
    case "ADD_ASK_QUESTION_MODAL":
      console.log({modal: action.modal});
      return {modal: action.modal};
    case "REMOVE_ASK_QUESTION_MODAL":
      debugger
      return {modal: action.modal};
    default:
      return defaultState;
  }
};

export default UIReducer;
