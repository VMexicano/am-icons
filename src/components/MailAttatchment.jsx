import React from 'react';
import MailAttatchment_ from './../Icons/mailAttatchment.svg';
const MailAttatchment = (props) => {
  return (
    <img src={MailAttatchment_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MailAttatchment;
