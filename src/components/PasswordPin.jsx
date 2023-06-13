import React from 'react';
import PasswordPin_ from './../Icons/passwordPin.svg';
const PasswordPin = (props) => {
  return (
    <img src={PasswordPin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PasswordPin;
