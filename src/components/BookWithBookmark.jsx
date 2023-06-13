import React from 'react';
import BookWithBookmark_ from './../Icons/bookWithBookmark.svg';
const BookWithBookmark = (props) => {
  return (
    <img src={BookWithBookmark_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BookWithBookmark;
