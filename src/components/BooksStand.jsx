import React from 'react';
import BooksStand_ from './../Icons/booksStand.svg';
const BooksStand = (props) => {
  return (
    <img src={BooksStand_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BooksStand;
