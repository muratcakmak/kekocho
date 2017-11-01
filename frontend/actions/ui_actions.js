export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (formType, questionId) => {

  return ({
    type: SHOW_MODAL,
    modal: {
      show: true,
      formType,
      questionId
    }
  });
};

export const hideModal = (formType) => {
  return ({
    type: HIDE_MODAL,
    modal: {
      show: false,
      formType
    }
  });
};
