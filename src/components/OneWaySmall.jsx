import React from 'react';
import OneWaySmall_ from './../Icons/oneWaySmall.svg';
const OneWaySmall = (props) => {
  return (
    <img src={OneWaySmall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OneWaySmall;
