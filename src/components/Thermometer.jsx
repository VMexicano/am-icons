import React from 'react';
import Thermometer_ from './../Icons/thermometer.svg';
const Thermometer = (props) => {
  return (
    <img src={Thermometer_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Thermometer;
