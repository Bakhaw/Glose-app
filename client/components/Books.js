import React, { Component } from 'react';

// For the Spin animation
import CircularProgress from 'material-ui/CircularProgress';

class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    fetch('https://api.glose.com/v1/booklists/free-books')
      .then(data => data.json())
      .then(data =>  this.setState({ data: [data] }));
  }

  render() {
    return (
      <div>

      {/* Before the data is in our state */}
      {this.state.data.length === 0 &&
        <div className="loading">
          <CircularProgress color="black" />
        </div>
      }

      {/* When the data is in our state */}
      {this.state.data.length > 0 &&
        <ul className="books-container">
          {this.state.data[0].modules[1].books.map((book, index) =>
            <li key={index} className="book">
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

export default Book;
