import * as TopicApiUtil from '../util/topic_api_util';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const receiveTopic = topic => {
  return ({
    type: RECEIVE_TOPIC,
    topic
  });
};

export const createTopic = questionTopic => dispatch => {
  return TopicApiUtil.createTopic(questionTopic).then(questionTopic => dispatch(receiveTopic(questionTopic)));
};
