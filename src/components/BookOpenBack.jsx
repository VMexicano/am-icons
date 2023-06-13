import React from 'react';
import BookOpenBack_ from './../Icons/bookOpenBack.svg';
const BookOpenBack = (props) => {
  return (
    <img src={BookOpenBack_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BookOpenBack;
