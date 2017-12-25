import { applyMiddleware, createStore, combineReducers } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import books from './reducers/booksReducer';
import foot from './reducers/footReducer';

export default createStore(
  combineReducers({
    books,
    foot
  }),
  {},
  applyMiddleware(createLogger(), thunk, promise())
);
