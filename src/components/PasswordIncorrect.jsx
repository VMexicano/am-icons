import React from 'react';
import PasswordIncorrect_ from './../Icons/passwordIncorrect.svg';
const PasswordIncorrect = (props) => {
  return (
    <img src={PasswordIncorrect_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PasswordIncorrect;
