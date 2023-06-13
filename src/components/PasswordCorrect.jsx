import React from 'react';
import PasswordCorrect_ from './../Icons/passwordCorrect.svg';
const PasswordCorrect = (props) => {
  return (
    <img src={PasswordCorrect_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PasswordCorrect;
