import React from 'react';
import FaresMayorConfort_ from './../Icons/faresMayorConfort.svg';
const FaresMayorConfort = (props) => {
  return (
    <img src={FaresMayorConfort_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresMayorConfort;
