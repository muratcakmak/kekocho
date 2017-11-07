import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const configureStore = (preloadedState = {}) => (
//   createStore(
//     RootReducer,
//     preloadedState,
//     applyMiddleware(thunk, logger)
//   )
// );
//
// export default configureStore;

let middleware;

if (process.env.NODE_ENV !== 'production') {
  debugger
    middleware =[thunk,logger];
} else {
    middleware = [thunk];
}


const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
);

export default configureStore;
