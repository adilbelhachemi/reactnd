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
        const criteria = event
        
        if (criteria.length !== 0 && criteria !== undefined) {
            this.setState({
                query: criteria
            })

            BooksAPI.search(criteria).then(books => {
                if (books !== undefined && books.length != 0 && books.error === undefined) {
                    this.setState({
                        searchedBooks: books
                    })
                }
            }).catch((books) => {
                if (books.error) {
                    this.clearSearch() 
                }
            })
        } else {
            this.clearSearch()
        }
    }

    clearSearch() {
        this.setState({
            query: '',
            searchedBooks: []
        })
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
                    </div>
                </div>
                <div className="search-books-results">
                    <ListBook books={books} searchedBooks={this.state.searchedBooks} updateBookShelf={updateBookShelf} />
                </div>
            </div>
        )
    }
}


export default SearchBook
