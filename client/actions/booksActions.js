import axios from 'axios';

export const fetchBooks = (dispatch) => {
    axios.get('https://api.glose.com/v1/booklists/free-books')
    .then(res => dispatch({ type: 'FETCH_BOOKS_FULFILLED', payload: res.data.modules[1].books }))
    .catch(err => dispatch({ type: 'FETCH_BOOKS_REJECTED', payload: err }))
}
