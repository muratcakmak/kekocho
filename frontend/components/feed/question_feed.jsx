import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestFeedData } from '../../actions/feed';
import { deleteAnswer } from '../../actions/answers';
import { deleteQuestion } from '../../actions/questions';
import { requestTopicQuestions } from '../../actions/topics';
import QuestionIndexItem from './question_index_item';
import FeedAddQuestionPrompt from './feed_add_question_prompt';
import TopicHeader from './topic_header';
import { compare } from '../../utils';

class QuestionFeed extends React.Component {
  constructor(props) {
    super(props);
    const { topicId } = this.props;
    this.state = {
      topicId,
    };
  }

  componentDidMount() {
    const { requestTopicQuestions, requestFeedData, path } = this.props;
    if (path.slice(0, 7) === '/topics') {
      requestTopicQuestions(this.props.topicId);
      this.setState({ topicId: this.props.topicId });
    } else {
      requestFeedData();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.topicId !== this.state.topicId) {
      this.props.requestTopicQuestions(this.props.topicId);
      this.setState({ topicId: this.props.topicId });
    }
  }

  render() {
    const questionIndexItems = [];
    const {
      answers, path, questions, currentUser, deleteQuestion, topic,
    } = this.props;

    Object.values(questions).sort(compare).map((question) => {
      const firstAnswer = answers[question.answerIds[0]];
      if (path === '/answers') {
        if (typeof firstAnswer === 'undefined') {
          questionIndexItems.push(<QuestionIndexItem currentUser={currentUser} deleteQuestion={deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer} />);
        }
      } else if (path.slice(0, 7) === '/topics') {
        // topic
        questionIndexItems.push(<QuestionIndexItem currentUser={currentUser} deleteQuestion={deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer} />);
      } else {
        questionIndexItems.push(<QuestionIndexItem currentUser={currentUser} deleteQuestion={deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer} />);
      }
    });
    return (
      <section className="content-main">
        {
          ((path.slice(0, 7) === '/topics') && topic) ?
            <TopicHeader topic={topic.name} />
          :
            <FeedAddQuestionPrompt />
        }
        <ul>
          {questionIndexItems}
        </ul>
      </section>
    );
  }
}

QuestionFeed.propTypes = {
  answers: PropTypes.object,
  questions: PropTypes.object,
  currentUser: PropTypes.object,
  path: PropTypes.string,
  requestFeedData: PropTypes.func.isRequired,
  deleteAnswer: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  requestTopicQuestions: PropTypes.func.isRequired,
  topic: PropTypes.string,
};


const mapStateToProps = (state, ownProps) => {
  const { currentUser } = state.session;
  const { answers, questions, topics } = state.entities;
  const { path } = ownProps.match;
  const { topicId } = ownProps.match.params;
  const topic = topics[topicId];
  return {
    currentUser,
    answers,
    questions,
    path,
    topicId,
    topic,
  };
};

const mapDispatchToProps = dispatch => ({
  requestFeedData: () => dispatch(requestFeedData()),
  deleteAnswer: answerId => dispatch(deleteAnswer(answerId)),
  deleteQuestion: answerId => dispatch(deleteQuestion(answerId)),
  requestTopicQuestions: topicId => dispatch(requestTopicQuestions(topicId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionFeed));
