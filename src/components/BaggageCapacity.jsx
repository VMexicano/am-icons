import React from 'react';
import BaggageCapacity_ from './../Icons/baggageCapacity.svg';
const BaggageCapacity = (props) => {
  return (
    <img src={BaggageCapacity_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BaggageCapacity;
