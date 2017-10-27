import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addAskQuestionModal } from '../../actions/ui_actions';
import QuestionButton from './question_button';

const mapStateToProps = (state, ownProps) => {
  debugger
  return{
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addAskQuestionModal: () => dispatch(addAskQuestionModal())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionButton));
