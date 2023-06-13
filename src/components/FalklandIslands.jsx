import React from 'react';
import FalklandIslands_ from './../Icons/falklandIslands.svg';
const FalklandIslands = (props) => {
  return (
    <img src={FalklandIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FalklandIslands;
