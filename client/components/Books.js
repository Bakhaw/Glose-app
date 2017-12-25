import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/booksActions';
// For the Spin animation
import CircularProgress from 'material-ui/CircularProgress';

class Book extends Component {

  componentWillMount() {
    //
  }

  render() {

    console.log(this.props.books);

    return (
      <div>
      {/* Before the data is in our state */}
      {/* {this.state.data.length === 0 &&
        <div className="loading">
          <CircularProgress color="black" />
        </div>
      } */}

      {/* When the data is in our state */}
      {/* {this.state.data.length > 0 &&
        <ul className="books-container">
          {this.state.data[0].modules[1].books.map((book, index) =>
            <li key={index} className="book col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <img src={book.image} alt="book-cover"/>
                <p className="title">{book.title}</p>
                {book.authors[0] &&
                  <p>par <span className="subtitle">{book.authors[0].name}</span></p>
                }
            </li>
          )}
        </ul>
      } */}
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    foot: state.foot
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => {
      dispatch(fetchBooks());
    }
  }
}

export default connect(mapStateToProps)(Book);
