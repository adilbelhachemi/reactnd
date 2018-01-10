import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import './App.css'
import Header from './components/Header'


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

  updateBookShelf(book, newShelf){
    
    if(book.shelf !== newShelf) {
    
      // let newBookList = this.state.books.map((currentBook) => {
      //   if(currentBook.id === book.id){
      //     currentBook.shelf = newShelf
      //   }
      // })
      // BooksAPI.update(book, shelf)
      // this.setState({
      //   books: newBookList
      // })
      console.log('book/shelf :' + book.title+' / '+newShelf);
    }
  }

  render() {

    let currentlyReadingBooks = this.state.books.filter(book => book.shelf === 'currentlyReading');
    let wantToReadBooks = this.state.books.filter(book => book.shelf === 'wantToRead');
    let readBooks = this.state.books.filter(book => book.shelf === 'read')


    return (
      <div className="app">
          <Header title="MyReads" />
          <BookShelf shelf='Currently Reading' books={currentlyReadingBooks} updateBookShelf={this.updateBookShelf}/>
          <BookShelf shelf='Want to Read' books={wantToReadBooks} updateBookShelf={this.updateBookShelf}/>
          <BookShelf shelf='Read' books={readBooks} updateBookShelf={this.updateBookShelf}/>
      </div>
    )
  }
}
export default BooksApp
