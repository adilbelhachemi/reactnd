import React, { Component } from 'react'
import ListBook from './ListBook'
import PropTypes from 'prop-types'

class BookShelf extends Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  }

  handleChange = (book, shelf) => {
    console.log('event' + book.title + ' ' + shelf)
  }

  render() {
    const { shelf, books, updateBookShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
              <ListBook books={books} updateBookShelf={updateBookShelf} />
            </div>
          </div>
        </div>
        <div className="open-search">
          <a>Add a book</a>
        </div>
      </div>
    );
  }
}

export default BookShelf;
