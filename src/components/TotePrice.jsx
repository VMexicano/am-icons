import React from 'react';
import TotePrice_ from './../Icons/totePrice.svg';
const TotePrice = (props) => {
  return (
    <img src={TotePrice_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TotePrice;
