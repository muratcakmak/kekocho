import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionFeed from './question_feed';

const mapStateToProps = (state, ownProps) => {
  return{
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionFeed));
