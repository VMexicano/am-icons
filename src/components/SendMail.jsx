import React from 'react';
import SendMail_ from './../Icons/sendMail.svg';
const SendMail = (props) => {
  return (
    <img src={SendMail_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SendMail;
