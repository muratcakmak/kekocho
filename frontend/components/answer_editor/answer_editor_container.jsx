import { connect } from 'react-redux';
import AnswerEditor from './answer_editor';
import { withRouter } from 'react-router';
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {

  return{
    question_id: ownProps.question_id,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAnswer: (answer) => dispatch(createAnswer(answer))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerEditor));
