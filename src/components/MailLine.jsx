import React from 'react';
import MailLine_ from './../Icons/mailLine.svg';
const MailLine = (props) => {
  return (
    <img src={MailLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MailLine;
