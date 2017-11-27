import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionFeed from './question_feed';
import { requestFeedData } from '../../actions/feed_actions';
import { deleteAnswer } from '../../actions/answer_actions';
import { deleteQuestion } from '../../actions/question_actions';
import { requestTopicQuestions } from '../../actions/topic_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.session.currentUser,
    questions: state.entities.questions,
    answers: state.entities.answers,
    path: ownProps.match.path,
    topicId: ownProps.match.params.topicId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestFeedData: () => dispatch(requestFeedData()),
    deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
    deleteQuestion: (answerId) => dispatch(deleteQuestion(answerId)),
    requestTopicQuestions: (topicId) => dispatch(requestTopicQuestions(topicId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionFeed));
