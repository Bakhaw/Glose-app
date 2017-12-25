const booksReducer = (
  state={
  fetching: false,
  fetched: false,
  books: [],
  error: null,
}, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_BOOKS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case 'FETCH_BOOKS_FULFILLED': {
      return {...state, fetching: false, fetched: true, books: action.payload}
      break;
    }
  }
  return state
}

export default booksReducer;
