import React from 'react';
import ReactDOM from 'react-dom';
// import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions'
document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  window.login = login;
  // window.signup = SessionAPIUtil.signup;
  // window.logout = SessionAPIUtil.logout;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store }/>, root);
});
