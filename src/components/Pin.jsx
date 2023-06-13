import React from 'react';
import Pin_ from './../Icons/pin.svg';
const Pin = (props) => {
  return (
    <img src={Pin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Pin;
