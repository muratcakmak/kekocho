import merge from 'lodash/merge';
import { SHOW_MODAL, HIDE_MODAL } from '../actions/ui_actions';

const defaultState = {
  modal: {
    show: false,
  },
};

const ui = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { modal: action.modal };
    case HIDE_MODAL:
      return { modal: action.modal };
    default:
      return defaultState;
  }
};

export default ui;
