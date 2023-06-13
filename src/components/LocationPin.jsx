import React from 'react';
import LocationPin_ from './../Icons/locationPin.svg';
const LocationPin = (props) => {
  return (
    <img src={LocationPin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LocationPin;
