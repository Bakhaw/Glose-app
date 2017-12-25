import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../redux';

// For the Spin animation
import CircularProgress from 'material-ui/CircularProgress';

class Book extends Component {

  componentWillMount() {
    // fetchBooks() action we imported
    this.props.fetchBooks()
  }

  render() {

    return (
      <div>
      {/* Before the data is charged */}
      {this.props.books.books.length === 0 &&
        <div className="loading">
          <CircularProgress color="black" />
        </div>
      }

      {/* When the data is charged */}
      {this.props.books.books.length > 0 &&
        <ul className="books-container">
        {console.log(this.props.books.books)}
          {this.props.books.books.map((book, index) =>
            <li key={index} className="book col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <img src={book.image} alt="book-cover"/>
                <p className="title">{book.title}</p>
                {book.authors[0] &&
                  <p>par <span className="subtitle">{book.authors[0].name}</span></p>
                }
            </li>
          )}
        </ul>
      }
    </div>
  );
  }
}

// Connecting our App to Redux
const mapStateToProps = (state) => {
  return {
    books: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => { dispatch(fetchBooks()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
