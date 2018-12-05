import React from 'react';
import BooksList from '../booklist/BooksList';
import './Compartment.css';

function Compartment(props) {
  let name;
  switch(props.name) {
    case 'currentlyReading': name = 'Currently Reading'; break;
    case 'wantToRead': name = 'Want To Read'; break;
    case 'read': name = 'Read'; break;
    default: name = props.name;
  }
  return (
    <div className="compartment">
      <h2>{name}</h2>
      <BooksList books={props.books} changeShelf={props.changeShelf} />
    </div>
  );
}

export default Compartment;