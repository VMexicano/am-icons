import React from 'react';
import PinPoints_ from './../Icons/pinPoints.svg';
const PinPoints = (props) => {
  return (
    <img src={PinPoints_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PinPoints;
