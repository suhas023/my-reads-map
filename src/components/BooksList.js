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
    <div 
      className="book"
      style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}
    >
    </div>
  );
}

export default BooksList;