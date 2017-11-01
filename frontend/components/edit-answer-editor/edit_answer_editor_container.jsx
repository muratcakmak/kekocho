import { connect } from 'react-redux';
import EditAnswerEditor from './edit_answer_editor';
import { withRouter } from 'react-router';
import { updateAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    question_id: ownProps.question_id,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateAnswer: (answer) => dispatch(updateAnswer(answer))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAnswerEditor));
