import React from 'react';
import WorldPin_ from './../Icons/worldPin.svg';
const WorldPin = (props) => {
  return (
    <img src={WorldPin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WorldPin;
