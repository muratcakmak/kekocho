import * as AnswerApiUtil from '../util/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';

export const receiveAnswer = newAnswer => {
  return ({
    type: RECEIVE_ANSWER,
    newAnswer
  });
};
export const receiveAllAnswers = answers => {
  return ({
    type: RECEIVE_ALL_ANSWERS,
    answers
  });
};

export const createAnswer = answer => dispatch => {
  return AnswerApiUtil.createAnswer(answer).then(answer => {
    return dispatch(receiveAnswer(answer));
  });
};

export const requestAllAnswers = () => dispatch => {
  return AnswerApiUtil.requestAllAnswers().then(answers => {
    return dispatch(receiveAllAnswers(answers));
  });
};
