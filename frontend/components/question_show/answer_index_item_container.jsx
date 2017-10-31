import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteAnswer, updateAnswer } from '../../actions/answer_actions';
import AnswerIndexItem from './answer_index_item';

const mapStateToProps = (state, ownProps) => {

  return {
    // currentUser: state.session.currentUser,
    // answer: state.entities.questions[ownProps.match.params.questionId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    updateAnswer: (answer) => dispatch(updateAnswer(answer))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerIndexItem));
