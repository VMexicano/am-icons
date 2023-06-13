import React from 'react';
import EmailError_ from './../Icons/emailError.svg';
const EmailError = (props) => {
  return (
    <img src={EmailError_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EmailError;
