import React from 'react';
import GalapagosIslands_ from './../Icons/galapagosIslands.svg';
const GalapagosIslands = (props) => {
  return (
    <img src={GalapagosIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GalapagosIslands;
