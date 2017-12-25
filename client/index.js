import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger';
import axios from 'axios';

const initialState = {
  fetching: false,
  fetched: false,
  books: [],
  error: null,
}

// actions
export const fetchStart = () => {
}

// export const fetchError = () => {
//   return {
//     type: "FETCH_ERROR"
//   };
// };
// export const fetchSuccess = () => {
//   return {
//     type: "FETCH_SUCCESS"
//   };
// };

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START": {
      return {...state, fetching: true}
    break;
    }
    case "FETCH_ERROR": {
    }
    case "FETCH_SUCCESS": {
    }
  }
  return state;
};

const middleware = applyMiddleware(createLogger())

// creation du store
const store = createStore(reducer, middleware);

console.log(store.getState())

// envoi de l'action dans le reducer
store.dispatch({ type: "FETCH_START" })

export default store;
