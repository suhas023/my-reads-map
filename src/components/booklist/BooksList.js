import React from 'react';
import './BooksList.css';

function BooksList(props) {
  return (
    <ul className="books-list">
      {
        props.books.map(book => 
          <li key={book.id}>
            <Book 
              book={book} 
              changeShelf={props.changeShelf}
            />
          </li>
        )
      }
    </ul>
  );
}

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div 
          className="book-cover"
          style={{
            backgroundImage: `url(${props.book.imageLinks && 
              props.book.imageLinks.thumbnail})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
          }}
        >
        </div>
        <div className="book-shelf-changer">
          <select 
            onChange={(e) => props.changeShelf(props.book, e.target.value)}
            defaultValue={props.book.shelf || 'none'}
          >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
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