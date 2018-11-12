import { combineReducers } from 'redux';
import SessionErrorsReducer from './sessionErrors';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
});

export default ErrorsReducer;
