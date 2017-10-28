import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

export const receiveQuestion = question => {
  return ({
    type: RECEIVE_QUESTION,
    entities: { questions: question }
  });
};

export const createQuestion = question => dispatch => {
  return QuestionApiUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)));
};

export const fetchQuestion = questionId => dispatch => {
  return QuestionApiUtil.fetchQuestion(questionId).then(question => dispatch(receiveQuestion(question)));
};
