import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const receiveQuestion = question => {
  return ({
    type: RECEIVE_QUESTION,
    question
  });
};

export const removeQuestion = question => {
  return({
    type: REMOVE_QUESTION,
    question
  });
};

export const createQuestion = question => dispatch => {
  return QuestionApiUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)));
};

export const fetchQuestion = questionId => dispatch => {
  return QuestionApiUtil.fetchQuestion(questionId).then(question => dispatch(receiveQuestion(question)));
};
export const deleteQuestion = questionId => dispatch => {
  return QuestionApiUtil.deleteQuestion(questionId).then(question => dispatch(removeQuestion(question)));
};
