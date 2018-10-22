import React from 'react';
import Compartment from './Compartment';
import '../styles/BookShelf.css';

function BookShelf(props) {
  let shelfs = props.shelfs;
  return (
    <div className="book-shelf">
      <header><h1>My Reads</h1></header>
      <div className="compartments">
        {
          shelfs.filter((shelf) => props[shelf].length > 0)
          .map((shelf) => (
            <Compartment
              key={shelf}
              name={shelf}
              books={props[shelf]}
            />)
          )
        }
      </div>
    </div>
  );
}

export default BookShelf;