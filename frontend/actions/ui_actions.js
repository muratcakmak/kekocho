export const ADD_ASK_QUESTION_MODAL = 'ADD_ASK_QUESTION_MODAL';
export const REMOVE_ASK_QUESTION_MODAL = 'REMOVE_ASK_QUESTION_MODAL';

export const addAskQuestionModal = () => {
  return ({
    type: ADD_ASK_QUESTION_MODAL,
    modal: {
      show: true,
      }
  });
};

export const removeAskQuestionModal = () => {
  return ({
    type: REMOVE_ASK_QUESTION_MODAL,
    modal: {
      show: false,
      }
  });
};
