import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionShow from './question_show';
import { fetchQuestion } from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  if(state.entities.questions){
    return{
      user: state.session.currentUser,
      question: state.entities.questions[ownProps.match.params.questionId]
    };
  }
  return {
    user: state.session.currentUser,
    question: undefined
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(fetchQuestion);
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    createAnswer: (answer) => dispatch(createAnswer(answer))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow));
