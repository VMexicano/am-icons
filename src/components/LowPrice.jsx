import React from 'react';
import LowPrice_ from './../Icons/lowPrice.svg';
const LowPrice = (props) => {
  return (
    <img src={LowPrice_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LowPrice;
