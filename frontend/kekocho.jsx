import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout, receiveErrors } from './actions/session_actions'
document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');

  window.login = login;
  window.logout = logout;
  
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
  ReactDOM.render(<Root store={ store }/>, root);
});
