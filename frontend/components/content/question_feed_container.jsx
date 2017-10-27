import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionFeed from './question_feed';
import { requestQuestions } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    entities: state.entities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestQuestions: () => dispatch(requestQuestions())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionFeed));
