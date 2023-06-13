import React from 'react';
import CanaryIslands_ from './../Icons/canaryIslands.svg';
const CanaryIslands = (props) => {
  return (
    <img src={CanaryIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CanaryIslands;
