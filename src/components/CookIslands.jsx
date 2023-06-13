import React from 'react';
import CookIslands_ from './../Icons/cookIslands.svg';
const CookIslands = (props) => {
  return (
    <img src={CookIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CookIslands;
