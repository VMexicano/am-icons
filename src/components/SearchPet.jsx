import React from 'react';
import SearchPet_ from './../Icons/searchPet.svg';
const SearchPet = (props) => {
  return (
    <img src={SearchPet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SearchPet;
