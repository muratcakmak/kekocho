import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteComment } from '../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';

const mapStateToProps = (state, ownProps) => {
  debugger
  return{
    currentUserId: state.session.currentUser.id,
    comment: ownProps.comment
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndexItem));
