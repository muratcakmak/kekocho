import { connect } from 'react-redux';
import CommentEditor from './comment_editor';
import { withRouter } from 'react-router';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  
  return{
    answerId: ownProps.answerId,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentEditor));
