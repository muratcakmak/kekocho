import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AskQuestionForm from './ask_question_form';
import { hideModal } from '../../actions/ui_actions';
import { createQuestion, updateQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {

  if(state.session.currentUser){
    return {
      show: state.ui.modal.show,
      user: state.session.currentUser,
      formType: state.ui.modal.formType,
      question: state.entities.questions[state.ui.modal.questionId]
    };
  }
  return{
    show: state.ui.modal.show,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hideModal: () => dispatch(hideModal()),
    createQuestion: (question) => dispatch(createQuestion(question)),
    updateQuestion: (question) => dispatch(updateQuestion(question))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AskQuestionForm));
