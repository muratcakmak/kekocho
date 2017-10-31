import * as AnswerApiUtil from '../util/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export const removeAnswer = newAnswer => {
  debugger
  return ({
    type: REMOVE_ANSWER,
    newAnswer
  });
};

export const receiveAnswer = newAnswer => {
  debugger
  return ({
    type: RECEIVE_ANSWER,
    newAnswer
  });
};

export const receiveAllAnswers = answers => {
  debugger
  return ({
    type: RECEIVE_ALL_ANSWERS,
    answers
  });
};

export const deleteAnswer = answerId => dispatch => {
  debugger
  return AnswerApiUtil.deleteAnswer(answerId).then(answer => {
    return dispatch(removeAnswer(answer));
  });
};

export const createAnswer = answer => dispatch => {
  return AnswerApiUtil.createAnswer(answer).then(answer => {
    return dispatch(receiveAnswer(answer));
  });
};

export const updateAnswer = answer => dispatch => {
  return AnswerApiUtil.updateAnswer(answer).then(answer => {
    return dispatch(receiveAnswer(answer));
  });
};

export const requestAllAnswers = () => dispatch => {
  return AnswerApiUtil.requestAllAnswers().then(answers => {
    return dispatch(receiveAllAnswers(answers));
  });
};
