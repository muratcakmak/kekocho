import { connect } from 'react-redux';
import FeedAddQuestionPrompt from './feed_add_question_prompt';
import { withRouter } from 'react-router';
import { addAskQuestionModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {

  return{
    currentUser: state.session.currentUser
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
)(FeedAddQuestionPrompt));
