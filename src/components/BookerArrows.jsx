import React from 'react';
import BookerArrows_ from './../Icons/bookerArrows.svg';
const BookerArrows = (props) => {
  return (
    <img src={BookerArrows_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BookerArrows;
