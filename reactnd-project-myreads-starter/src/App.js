import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import './App.css'
import Header from './components/Header'
import SearchBook from './components/SearchBook'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }

  updateBookShelf(book, newShelf) {

    if (book.shelf !== newShelf) {
      BooksAPI.update(book, newShelf).then((books) => {
        this.setState({
          books
        })
      })
    }
  }

  render() {

    let currentlyReadingBooks = this.state.books.filter(book => book.shelf === 'currentlyReading');
    let wantToReadBooks = this.state.books.filter(book => book.shelf === 'wantToRead');
    let readBooks = this.state.books.filter(book => book.shelf === 'read');

    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <div>
            <Header title="MyReads" />
            <BookShelf shelf='Currently Reading' books={currentlyReadingBooks} updateBookShelf={this.updateBookShelf} />
            <BookShelf shelf='Want to Read' books={wantToReadBooks} updateBookShelf={this.updateBookShelf} />
            <BookShelf shelf='Read' books={readBooks} updateBookShelf={this.updateBookShelf} />
          </div>
        )} />

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

        <Route exact path='/search' render={() => (
          <SearchBook books={this.state.books} updateBookShelf={this.updateBookShelf} />
        )} />

      </div>
    )
  }
}
export default BooksApp
