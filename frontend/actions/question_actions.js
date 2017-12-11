import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question,
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question,
});

export const createQuestion = question => dispatch => QuestionApiUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)));

export const fetchQuestion = questionId => dispatch => QuestionApiUtil.fetchQuestion(questionId).then(question => dispatch(receiveQuestion(question)));

export const deleteQuestion = questionId => dispatch => QuestionApiUtil.deleteQuestion(questionId).then(question => dispatch(removeQuestion(question)));

export const updateQuestion = question => dispatch => QuestionApiUtil.updateQuestion(question).then(question => dispatch(receiveQuestion(question)));
