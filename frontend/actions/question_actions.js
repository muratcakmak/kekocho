import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';

export const receiveAllQuestions = questions => {
  return ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
  });
};

export const receiveQuestion = question => {
  return ({
    type: RECEIVE_QUESTION,
    question
  });
};

export const createQuestion = question => dispatch => {
  return QuestionApiUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)));
};

export const fetchQuestion = questionId => dispatch => {
  return QuestionApiUtil.fetchQuestion(questionId).then(question => dispatch(receiveQuestion(question)));
};

export const requestQuestions = () => dispatch => {
  return QuestionApiUtil.requestQuestions().then(
    (questions) => dispatch(receiveAllQuestions(questions)),
    (errors) => dispatch(receiveErrors(errors))
  );
};
