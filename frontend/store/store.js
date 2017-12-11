import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

let middleware;

if (process.env.NODE_ENV !== 'production') {
  middleware = [thunk, logger];
} else {
  middleware = [thunk];
}


const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  )
);

export default configureStore;
