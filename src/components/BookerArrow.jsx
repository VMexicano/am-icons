import React from 'react';
import BookerArrow_ from './../Icons/bookerArrow.svg';
const BookerArrow = (props) => {
  return (
    <img src={BookerArrow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BookerArrow;
