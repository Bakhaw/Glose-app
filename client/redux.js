import { createStore } from "redux";

const initialState = {
  fetching: false,
  fetched: false,
  books: [],
  error: null,
}

// actions
export const fetchStart = () => {
  return {
    type: "FETCH_START"
  };
};
export const fetchError = () => {
  return {
    type: "FETCH_ERROR"
  };
};
export const fetchSuccess = () => {
  return {
    type: "FETCH_SUCCESS"
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START": {
      { ...state, fetching: true }
    break;
    },
    case "FETCH_ERROR": {
      { ...state, fetching: false, error: action.err }
    },
    case "FETCH_SUCCESS": {
      { ...state, fetching: false, fetched: true }
    }
  }
  return state;
};

// creation du store
const store = createStore(reducer);

console.log(store.getState())

// envoi de l'action dans le reducer
// store.dispatch(showNumber(5));

export default store;
