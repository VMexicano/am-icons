import React from 'react';
import CarWheel_ from './../Icons/carWheel.svg';
const CarWheel = (props) => {
  return (
    <img src={CarWheel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarWheel;
