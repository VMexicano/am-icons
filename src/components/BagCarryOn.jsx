import React from 'react';
import BagCarryOn_ from './../Icons/bagCarryOn.svg';
const BagCarryOn = (props) => {
  return (
    <img src={BagCarryOn_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BagCarryOn;
