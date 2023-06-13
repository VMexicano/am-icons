import React from 'react';
import PinCircle_ from './../Icons/pinCircle.svg';
const PinCircle = (props) => {
  return (
    <img src={PinCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PinCircle;
