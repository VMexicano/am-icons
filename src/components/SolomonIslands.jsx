import React from 'react';
import SolomonIslands_ from './../Icons/solomonIslands.svg';
const SolomonIslands = (props) => {
  return (
    <img src={SolomonIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SolomonIslands;
