import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';
export const ADD_ASK_QUESTION_MODAL = 'ADD_ASK_QUESTION_MODAL';

export const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const receiveQuestions = questions => {
  return ({
    type: RECEIVE_ALL_QUESTIONS,
    entities: questions
  });
};

export const addAskQuestionModel = () => {
  return ({
    type: ADD_ASK_QUESTION_MODAL
  });
};


export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors)));
};


export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveErrors(errors)));
};

export const requestQuestions = () => dispatch => {
  return SessionApiUtil.requestQuestions().then(
    (questions) => dispatch(receiveQuestions(questions)),
    (errors) => dispatch(receiveErrors(errors))
  );
};
