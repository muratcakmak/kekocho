import * as AnswerApiUtil from '../util/answer_api_util';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

export const receiveAnswer = answer => {
  return ({
    type: RECEIVE_ANSWER,
    entities: { answers: answer }
  });
};

export const createAnswer = answer => dispatch => {
  return AnswerApiUtil.createAnswer(answer).then(answer => {
    debugger
    return dispatch(receiveAnswer(answer))
  });
};
