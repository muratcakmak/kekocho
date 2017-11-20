import merge from 'lodash/merge';
import difference from 'lodash/difference';

import { RECEIVE_QUESTION, REMOVE_QUESTION } from '../actions/question_actions';
import { RECEIVE_FEED_DATA } from '../actions/feed_actions';
import { RECEIVE_ANSWER, REMOVE_ANSWER } from '../actions/answer_actions';
import { RECEIVE_TOPIC } from '../actions/topic_actions';

const defaultState = { };

const QuestionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_FEED_DATA:
      return merge({}, state, action.questions);
    case REMOVE_QUESTION:
      newState = merge({}, state);
      delete newState[action.question.id];
      return newState;
    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});
    case RECEIVE_ANSWER:
      newState = merge({}, state);
      const newItem = action.answer.id;
      const array = newState[action.answer.questionId].answerIds;
      array.indexOf(newItem) === -1 ? array.push(newItem) : console.log("This item already exists");
      return newState;
    case REMOVE_ANSWER:
      newState = merge({}, state);
      const idx = newState[action.answer.questionId].answerIds.indexOf(action.answer.id);
      newState[action.answer.questionId].answerIds.splice(idx, 1);
      return newState;
    case RECEIVE_TOPIC:
      newState = merge({}, state);
      newState[action.topic.questionId].topicIds.push(action.topic.id);
      newState[action.topic.questionId].topics[action.topic.topicId] = {id: action.topicId, name: action.topic.name};
      return newState;
    default:
      return state;
  }
};

export default QuestionReducer;
