import merge from 'lodash/merge';
import difference from 'lodash/difference';

import { RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';
import { RECEIVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_UPVOTE, REMOVE_UPVOTE } from '../actions/upvote_actions';

const defaultState = { };

const AnswerReducer = (state = defaultState, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return merge({}, state, action.answers);
    case RECEIVE_ANSWER:
      newState = merge({}, state);
      newState[action.answer.id] = action.answer;
      return newState;
    case REMOVE_ANSWER:
      newState = merge({}, state);
      delete newState[action.answer.id];
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.answerId].commentIds.push(action.comment.id);
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      const idx = newState[action.comment.answerId].commentIds.indexOf(action.comment.id);
      newState[action.comment.answerId].commentIds.splice(idx, 1);
      return newState;
    case RECEIVE_QUESTION:
      return merge({}, state, action.question.answers);

    case RECEIVE_UPVOTE:
      newState = merge({}, state);
      newState[action.upvote.answerId].upvotes = action.upvote.upvotes;
      return newState;
    case REMOVE_UPVOTE:
      newState = merge({}, state);
      newState[action.upvote.answerId].upvotes = action.upvote.upvotes;
      return newState;
    default:
      return state;
  }
};

export default AnswerReducer;
