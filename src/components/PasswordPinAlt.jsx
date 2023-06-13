import React from 'react';
import PasswordPinAlt_ from './../Icons/passwordPinAlt.svg';
const PasswordPinAlt = (props) => {
  return (
    <img src={PasswordPinAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PasswordPinAlt;
