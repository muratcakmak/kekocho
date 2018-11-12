import * as UpvoteApiUtil from '../api/upvotes';

export const RECEIVE_UPVOTE = 'RECEIVE_UPVOTE';

export const REMOVE_UPVOTE = 'REMOVE_UPVOTE';

export const receiveUpvote = upvote => ({
  type: RECEIVE_UPVOTE,
  upvote,
});

export const removeUpvote = upvote => ({
  type: REMOVE_UPVOTE,
  upvote,
});

export const createUpvote = upvote => dispatch => UpvoteApiUtil.createUpvote(upvote).then(upvote => dispatch(receiveUpvote(upvote)));

export const deleteUpvote = upvote => dispatch => UpvoteApiUtil.deleteUpvote(upvote).then(upvote => dispatch(removeUpvote(upvote)));
