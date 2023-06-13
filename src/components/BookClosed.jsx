import React from 'react';
import BookClosed_ from './../Icons/bookClosed.svg';
const BookClosed = (props) => {
  return (
    <img src={BookClosed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BookClosed;
