import * as FeedApiUtil from '../util/feed_api_util';

export const RECEIVE_FEED_DATA = 'RECEIVE_FEED_DATA';

export const receiveFeedData = ({
  questions, answers, comments, topics, userTopics,
}) => ({
  type: RECEIVE_FEED_DATA,
  questions,
  answers,
  comments,
  topics,
  userTopics,
});

export const requestFeedData = () => dispatch => FeedApiUtil.requestFeedData().then(
  feedData => dispatch(receiveFeedData(feedData)),
  errors => dispatch(receiveErrors(errors)),
);

export const requestFeedDataWithPage = page => dispatch => FeedApiUtil.requestFeedDataWithPage(page).then(
  feedData => dispatch(receiveFeedData(feedData)),
  errors => dispatch(receiveErrors(errors)),
);
