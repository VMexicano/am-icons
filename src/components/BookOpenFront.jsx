import React from 'react';
import BookOpenFront_ from './../Icons/bookOpenFront.svg';
const BookOpenFront = (props) => {
  return (
    <img src={BookOpenFront_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BookOpenFront;
