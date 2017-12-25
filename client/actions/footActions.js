import axios from 'axios';

export function fetchFoot () {
  return (dispatch) => {
    axios.get('https://www.football-data.org/v1/competitions')
      .then(res => {
        dispatch({ type: 'FETCH_FOOT_FULFILLED', payload: res.data })
      })
      .catch(err => {
        dispatch({ type: 'FETCH_FOOT_REJECTED', payload: err })
      })
  }
}
