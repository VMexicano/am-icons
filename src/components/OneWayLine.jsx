import React from 'react';
import OneWayLine_ from './../Icons/oneWayLine.svg';
const OneWayLine = (props) => {
  return (
    <img src={OneWayLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OneWayLine;
