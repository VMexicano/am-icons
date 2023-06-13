import React from 'react';
import BookOpen_ from './../Icons/bookOpen.svg';
const BookOpen = (props) => {
  return (
    <img src={BookOpen_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BookOpen;
