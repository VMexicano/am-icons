import React from 'react';
import SearchAlt_ from './../Icons/searchAlt.svg';
const SearchAlt = (props) => {
  return (
    <img src={SearchAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SearchAlt;
