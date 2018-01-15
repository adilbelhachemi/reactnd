import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class ListBook extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
    }

    setBackgroundImage(book) {
        let url ='no picture'
        if(book.imageLinks.smallThumbnail !== undefined ){
            url = book.imageLinks.smallThumbnail
        }
        return url
    }

    render() {

        const { books, updateBookShelf } = this.props


        return (
            <ol className="books-grid">
                {books.map(book => (
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
                                <ShelfChanger book={book} updateBookShelf={updateBookShelf} />
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