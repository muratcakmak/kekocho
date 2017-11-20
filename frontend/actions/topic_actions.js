import * as TopicApiUtil from '../util/topic_api_util';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const RECEIVE_TOPIC_QUESTIONS = "RECEIVE_TOPIC_QUESTIONS";

export const receiveTopic = topic => {
  debugger
  return ({
    type: RECEIVE_TOPIC,
    topic
  });
};

export const receiveTopicQuestions = topicQuestions => {
  return ({
    type: RECEIVE_TOPIC_QUESTIONS,
    topicQuestions
  });
};

export const createTopic = questionTopic => dispatch => {
  return TopicApiUtil.createTopic(questionTopic).then(questionTopic => dispatch(receiveTopic(questionTopic)));
};

export const requestTopicQuestions = topicId => dispatch => {
  return TopicApiUtil.requestTopicQuestions(topicId).then(topic => dispatch(receiveTopicQuestions(topic)));
};
