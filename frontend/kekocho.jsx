import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, receiveErrors } from './actions/session_actions';
import { showModal } from './actions/ui_actions';
import { createQuestion } from './actions/question_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = login;
  window.logout = logout;
  window.modal = {modal: {
    show: true,
    }
  };
  window.showModal = showModal;
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveErrors = receiveErrors;
  window.createQuestion = createQuestion;
  ReactDOM.render(<Root store={ store }/>, root);
});
