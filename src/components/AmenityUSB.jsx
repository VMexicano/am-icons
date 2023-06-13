import React from 'react';
import AmenityUSB_ from './../Icons/amenityUSB.svg';
const AmenityUSB = (props) => {
  return (
    <img src={AmenityUSB_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityUSB;
