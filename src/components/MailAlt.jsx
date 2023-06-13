import React from 'react';
import MailAlt_ from './../Icons/mailAlt.svg';
const MailAlt = (props) => {
  return (
    <img src={MailAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MailAlt;
