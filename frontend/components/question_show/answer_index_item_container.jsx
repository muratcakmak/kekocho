import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteAnswer, updateAnswer } from '../../actions/answer_actions';
import AnswerIndexItem from './answer_index_item';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  console.log('userId');
  console.log(state.session.currentUser.id);
  const answers = state.entities.answers[ownProps.answer.id];
  if(answers && answers.commentIds.length > 0){
    return {
      comments: state.entities.answers[ownProps.answer.id].commentIds.map(id => state.entities.comments[id]),
      userId: state.session.currentUser.id,
    };
  }
  return{
    userId: state.session.currentUser.id,
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
