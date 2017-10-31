import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionShow from './question_show';
import { fetchQuestion } from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.questions[ownProps.match.params.questionId]);
  
  return {
    answers: state.entities.questions[ownProps.match.params.questionId].answerIds.map(id => state.entities.answers[id]),
    currentUser: state.session.currentUser,
    question: state.entities.questions[ownProps.match.params.questionId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    createAnswer: (answer) => dispatch(createAnswer(answer))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow));
