import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const removeComment = comment => {
  return ({
    type: REMOVE_COMMENT,
    comment
  });
};

export const receiveComment = comment => {
  return ({
    type: RECEIVE_COMMENT,
    comment
  });
};


export const deleteComment = commentId => dispatch => {
  return CommentApiUtil.deleteComment(commentId).then(comment => {
    return dispatch(removeComment(comment));
  });
};

export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment).then(comment => {
    return dispatch(receiveComment(comment));
  });
};

export const updateComment = comment => dispatch => {

  return CommentApiUtil.updateComment(comment).then(comment => {
    return dispatch(receiveComment(comment));
  });
};
