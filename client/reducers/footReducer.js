const footReducer = (
  state={
  fetching: false,
  fetched: false,
  foot: [],
  error: null,
}, action) => {
  switch (action.type) {
    case 'FETCH_FOOT': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_FOOT_REJECTED': {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case 'FETCH_FOOT_FULFILLED': {
      return {...state, fetching: false, fetched: true, foot: action.payload}
      break;
    }
  }
  return state
}

export default footReducer;
