import React from 'react';
import BaggageLocation_ from './../Icons/baggageLocation.svg';
const BaggageLocation = (props) => {
  return (
    <img src={BaggageLocation_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BaggageLocation;
