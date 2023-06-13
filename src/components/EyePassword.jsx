import React from 'react';
import EyePassword_ from './../Icons/eyePassword.svg';
const EyePassword = (props) => {
  return (
    <img src={EyePassword_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EyePassword;
