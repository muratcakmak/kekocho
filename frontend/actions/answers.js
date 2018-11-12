import * as AnswerApiUtil from '../api/answers';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';

export const removeAnswer = answer => ({
  type: REMOVE_ANSWER,
  answer,
});

export const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer,
});

export const receiveAllAnswers = answers => ({
  type: RECEIVE_ALL_ANSWERS,
  answers,
});

export const deleteAnswer = answerId => dispatch => AnswerApiUtil.deleteAnswer(answerId).then(answer => dispatch(removeAnswer(answer)));

export const createAnswer = answer => dispatch => AnswerApiUtil.createAnswer(answer).then(answer => dispatch(receiveAnswer(answer)));

export const updateAnswer = answer => dispatch => AnswerApiUtil.updateAnswer(answer).then(answer => dispatch(receiveAnswer(answer)));

export const requestAllAnswers = () => dispatch => AnswerApiUtil.requestAllAnswers().then(answers => dispatch(receiveAllAnswers(answers)));
