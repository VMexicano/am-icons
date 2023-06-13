import React from 'react';
import SearchLine_ from './../Icons/searchLine.svg';
const SearchLine = (props) => {
  return (
    <img src={SearchLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SearchLine;
