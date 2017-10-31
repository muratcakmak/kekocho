import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionFeed from './question_feed';
import { requestFeedData } from '../../actions/feed_actions';
import { deleteAnswer } from '../../actions/answer_actions';
import { deleteQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return{
    currentUser: state.session.currentUser,
    entities: state.entities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestFeedData: () => dispatch(requestFeedData()),
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    deleteQuestion: (answerId) => dispatch(deleteQuestion(answerId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionFeed));
