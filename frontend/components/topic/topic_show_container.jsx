import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TopicShow from './topic_show';
import { requestTopicQuestions } from '../../actions/topic_actions';

const mapStateToProps = (state, ownProps) => {
  if(Object.values(state.entities.topicQuestions).length > 0){
    return {
        topic: state.entities.topicQuestions.topic,
    questions: Object.values(state.entities.topicQuestions.questions)
    };
  }
  return {
    topicId: ownProps.match.params.topicId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestTopicQuestions: (topicId) => dispatch(requestTopicQuestions(topicId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicShow));
