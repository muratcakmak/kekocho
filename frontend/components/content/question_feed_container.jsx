import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionFeed from './question_feed';
import { requestFeedData } from '../../actions/feed_actions';
const mapStateToProps = (state, ownProps) => {
  return{
    entities: state.entities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestFeedData: () => dispatch(requestFeedData())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionFeed));
