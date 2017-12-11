import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment,
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});


export const deleteComment = commentId => dispatch => CommentApiUtil.deleteComment(commentId).then((comment) => dispatch(removeComment(comment)));

export const createComment = comment => dispatch => CommentApiUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)));

export const updateComment = comment => dispatch => CommentApiUtil.updateComment(comment).then((comment) => dispatch(receiveComment(comment)));
