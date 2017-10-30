import * as FeedApiUtil from '../util/feed_api_util';

export const RECEIVE_FEED_DATA = 'RECEIVE_FEED_DATA';

export const receiveFeedData = ({ questions, answers, comments }) => {
  return ({
    type: RECEIVE_FEED_DATA,
    questions,
    answers,
    comments
  });
};

export const requestFeedData = () => dispatch => {
  return FeedApiUtil.requestFeedData().then(
    (feedData) => dispatch(receiveFeedData(feedData)),
    (errors) => dispatch(receiveErrors(errors))
  );
};
