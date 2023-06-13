import React from 'react';
import Search_ from './../Icons/search.svg';
const Search = (props) => {
  return (
    <img src={Search_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Search;
