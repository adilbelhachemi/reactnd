import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBook from './ListBook'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'


class SearchBook extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

    state = {
        query: '',
        searchedBooks: []
    }


    searchBook = (event) => {

        const criteria = event.trim()

        if (criteria !== '' || criteria !== undefined) {
            this.setState({
                query: criteria
            })

            BooksAPI.search(criteria).then(books => {
                if (books !== undefined && books.length > 0) {
                    this.setState({
                        searchedBooks: books
                    })
                }
            })
        }
    }

    render() {

        const { books, updateBookShelf } = this.props;
        const query = this.state

        return (
            <div className="search-books" >
                <div className="search-books-bar">
                    <Link className="close-search" to='/' >Close</Link>
                    <div className="search-books-input-wrapper">

                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.searchBook(event.target.value)}
                        />
                        <ListBook books={this.state.searchedBooks} updateBookShelf={updateBookShelf} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}


export default SearchBook
