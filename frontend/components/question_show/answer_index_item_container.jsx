import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteAnswer, updateAnswer } from '../../actions/answer_actions';
import AnswerIndexItem from './answer_index_item';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';

const mapStateToProps = (state, ownProps) => {
  const answers = state.entities.answers[ownProps.answer.id];
  if(answers && answers.commentIds.length > 0){
    return {
      comments: state.entities.answers[ownProps.answer.id].commentIds.map(id => state.entities.comments[id]),
      user: state.session.currentUser,
    };
  }
  return{
    user: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),
    deleteUpvote: (upvote) => dispatch(deleteUpvote(upvote)),
    createUpvote: (upvote) => dispatch(createUpvote(upvote)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndexItem));
