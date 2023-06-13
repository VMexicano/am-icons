import React from 'react';
import AlandIslands_ from './../Icons/alandIslands.svg';
const AlandIslands = (props) => {
  return (
    <img src={AlandIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AlandIslands;
