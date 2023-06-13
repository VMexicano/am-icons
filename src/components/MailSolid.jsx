import React from 'react';
import MailSolid_ from './../Icons/mailSolid.svg';
const MailSolid = (props) => {
  return (
    <img src={MailSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MailSolid;
