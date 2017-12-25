import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

// initialState for my reducer
const initialState = {
  fetching: false,
  fetched: false,
  books: [],
  error: null,
}

// Actions
export const fetchBooks = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_BOOKS', })
    axios.get('https://api.glose.com/v1/booklists/free-books')
    .then(res => dispatch({
      type: 'FETCH_BOOKS_SUCCESS',
      payload: res.data.modules[1].books
    }))
    .catch(err => dispatch({
      type: 'FETCH_BOOKS_ERROR',
      payload: err
    }))
  }
}

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_BOOKS_ERROR': {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case 'FETCH_BOOKS_SUCCESS': {
      return {...state, fetching: false, fetched: true, books: action.payload}
      break;
    }
  }
  return state
}

const middleware = applyMiddleware(thunk, createLogger())

// creation du store
const store = createStore(booksReducer, middleware)

export default store;
