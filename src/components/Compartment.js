import React from 'react';
import BooksList from './BooksList';
import '../styles/Compartment.css';

function Compartment(props) {
  let name;
  switch(props.name) {
    case 'currentlyReading': name = 'Currently Reading'; break;
    case 'wantToRead': name = 'Want To Read'; break;
    case 'read': name = 'Read'; break;
    default: name = '--';
  }
  return (
    <div className="compartment">
      <h2>{name}</h2>
      <BooksList books={props.books}/>
    </div>
  );
}

export default Compartment;