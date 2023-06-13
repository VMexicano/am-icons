import React from 'react';
import CheckInAncillary_ from './../Icons/checkInAncillary.svg';
const CheckInAncillary = (props) => {
  return (
    <img src={CheckInAncillary_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CheckInAncillary;
