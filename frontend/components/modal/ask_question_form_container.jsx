import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AskQuestionForm from './ask_question_form';
import { hideModal } from '../../actions/ui';
import { createQuestion, updateQuestion } from '../../actions/questions';

const mapStateToProps = (state) => {
  const { currentUser } = state.session;
  if (currentUser) {
    const { show, formType, questionId } = state.ui.modal;
    const { questions } = state.entities;
    return {
      show,
      formType,
      user: currentUser,
      question: questions[questionId],
    };
  }
  return {
    show: state.ui.modal.show,
  };
};

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  createQuestion: question => dispatch(createQuestion(question)),
  updateQuestion: question => dispatch(updateQuestion(question)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AskQuestionForm));
