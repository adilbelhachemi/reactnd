import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ShelfChanger extends Component {


    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
    }

    setBookshelf(books, searchedBooks, book) {
        
        let currentShelf = 'none'

        for(let i in books){
            if(books[i].id === book.id){
                currentShelf = books[i].shelf
            }
        }
        return currentShelf
    }

    render() {

        const { books, searchedBooks, book, updateBookShelf } = this.props

        return (
            <div className="book-shelf-changer">
                <select
                    onChange={(event) => updateBookShelf(book, event.target.value)}
                    value={this.setBookshelf(books, searchedBooks, book)}>
                    <option value="moveTo" disabled>Move to</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger