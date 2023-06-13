import React from 'react';
import CarryOn_ from './../Icons/carryOn.svg';
const CarryOn = (props) => {
  return (
    <img src={CarryOn_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarryOn;
