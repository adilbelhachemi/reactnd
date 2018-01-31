import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListBook extends Component {
    
    //the props searchedBooks is not required
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
    }

    setBackgroundImage(book) {
        let url = 'http://via.placeholder.com/128x193?text=No%20Cover'
        if (book.imageLinks !== undefined && book.imageLinks.smallThumbnail) {
            url = book.imageLinks.smallThumbnail
        }
        return url
    }

    setBookAuthors(book){
        let authors = book.authors ? book.authors.join(', ') : '';
        return authors
    }

    render() {

        const { books, searchedBooks, updateBookShelf } = this.props

        /**
         * the ListBook component is called from more than one component (BookShelf & SearchBook)
         * the list Book is setted depending on the component who use the ListBook.js
         */
        let listsBook = (searchedBooks === undefined) ? books : searchedBooks

        return (
                <ol className="books-grid">
                    {listsBook.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div
                                        className="book-cover"
                                        style={{
                                            width: 128,
                                            height: 192,
                                            backgroundImage: `url(${this.setBackgroundImage(book)})`,
                                        }}
                                    />
                                    <ShelfChanger books={books} book={book} updateBookShelf={updateBookShelf} />
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{this.setBookAuthors(book)}</div>
                            </div>
                        </li>
                    ))}
                </ol>
        )
    }
}

export default ListBook