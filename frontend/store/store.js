import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers/';

let middleware;

if (process.env.NODE_ENV !== 'production') {
  middleware = [thunk, logger];
} else {
  middleware = [thunk];
}


const configureStore = (preloadedState = {}) => (
  createStore(
    reducers,
    preloadedState,
    applyMiddleware(...middleware),
  )
);

export default configureStore;
