import * as UpvoteApiUtil from '../util/upvote_api_util';

export const RECEIVE_UPVOTE= 'RECEIVE_UPVOTE';

export const REMOVE_UPVOTE = 'REMOVE_UPVOTE';

export const receiveUpvote = upvote => {
  return ({
    type: RECEIVE_UPVOTE,
    upvote
  });
};

export const removeUpvote = upvote => {
  return ({
    type: REMOVE_UPVOTE,
    upvote
  });
};

export const createUpvote = upvote => dispatch => {
  return UpvoteApiUtil.createUpvote(upvote).then(upvote => dispatch(receiveUpvote(upvote)));
};

export const deleteUpvote = upvote => dispatch => {
  return UpvoteApiUtil.deleteUpvote(upvote).then(upvote => dispatch(removeUpvote(upvote)));
};
