import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteAnswer, updateAnswer } from '../../actions/answer_actions';
import AnswerIndexItem from './answer_index_item';

const mapStateToProps = (state, ownProps) => {
  if(state.entities.answers[ownProps.answer.id].commentIds.length > 0){
    return {
      comments: state.entities.answers[ownProps.answer.id].commentIds.map(id => state.entities.comments[id]),
    };
  }
  return{

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndexItem));
