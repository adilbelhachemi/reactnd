import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ChangeShelf extends Component {


    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
      }

    render() {
        
        const { book, updateBookShelf} = this.props

        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => updateBookShelf(book, event.target.value)}>
                    <option value="none" disabled>Move to</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default  ChangeShelf