import React from 'react';
import CheckIn_ from './../Icons/checkIn.svg';
const CheckIn = (props) => {
  return (
    <img src={CheckIn_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CheckIn;
