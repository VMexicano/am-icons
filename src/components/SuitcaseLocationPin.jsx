import React from 'react';
import SuitcaseLocationPin_ from './../Icons/suitcaseLocationPin.svg';
const SuitcaseLocationPin = (props) => {
  return (
    <img src={SuitcaseLocationPin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SuitcaseLocationPin;
