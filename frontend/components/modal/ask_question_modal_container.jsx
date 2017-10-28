import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AskQuestionModal from './ask_question_modal';
import { removeAskQuestionModal } from '../../actions/ui_actions';
import { createQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  if(state.session.currentUser){
    return {
      show: state.ui.modal.show,
      user: state.session.currentUser};
  }
  return{
    show: state.ui.modal.show,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeAskQuestionModal: () => dispatch(removeAskQuestionModal()),
    createQuestion: (question) => dispatch(createQuestion(question))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AskQuestionModal));
