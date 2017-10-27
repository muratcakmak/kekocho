import { connect } from 'react-redux';
import FeedAddQuestionPrompt from './feed_add_question_prompt';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  debugger
  return{
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedAddQuestionPrompt));
