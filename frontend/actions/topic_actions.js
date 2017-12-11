import * as TopicApiUtil from '../util/topic_api_util';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const REMOVE_TOPIC = 'REMOVE_TOPIC';

export const RECEIVE_TOPIC_QUESTIONS = 'RECEIVE_TOPIC_QUESTIONS';

export const receiveTopic = topic => ({
  type: RECEIVE_TOPIC,
  topic,
});

export const removeTopic = questionTopic => ({
  type: REMOVE_TOPIC,
  questionTopic,
});

export const receiveTopicQuestions = topicQuestions => ({
  type: RECEIVE_TOPIC_QUESTIONS,
  topicQuestions,
});

export const createTopic = questionTopic => dispatch => TopicApiUtil.createTopic(questionTopic).then(questionTopic => dispatch(receiveTopic(questionTopic)));

export const deleteTopic = questionTopic => dispatch => TopicApiUtil.deleteTopic(questionTopic).then(questionTopic => dispatch(removeTopic(questionTopic)));

export const requestTopicQuestions = topicId => dispatch => TopicApiUtil.requestTopicQuestions(topicId).then(topic => dispatch(receiveTopicQuestions(topic)));
