import React from 'react';
import Mail_ from './../Icons/mail.svg';
const Mail = (props) => {
  return (
    <img src={Mail_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mail;
