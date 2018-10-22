import React from 'react';
import '../styles/BooksList.css';

function BooksList(props) {
  return (
    <ul className="books-list">
      {props.books.map(book => <li key={book.id}><Book book={book} /></li>)}
    </ul>
  );
}

function Book(props) {
  console.log(props.book);
  return (
    <div className="book">
      <div className="book-top">
        <div 
          className="book-cover"
          style={{backgroundImage: `url(${props.book.imageLinks.thumbnail})`}}
        >
        </div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading" selected={props.book.shelf === 'currentlyReading'}>Currently     Reading</option>
            <option value="wantToRead" selected={props.book.shelf === 'wantToRead'}>Want to Read</option>
            <option value="read" selected={props.book.shelf === 'read'}>Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
}

export default BooksList;