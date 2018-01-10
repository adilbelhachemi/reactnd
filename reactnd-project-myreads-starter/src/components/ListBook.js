import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'
import PropTypes from 'prop-types'


class ListBook extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
      }

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map(book => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 192,
                                        backgroundImage: `url(${
                                            book.imageLinks.smallThumbnail
                                            })`,
                                    }}
                                />
                                <ChangeShelf book={book} updateBookShelf={this.updateBookShelf} />
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListBook