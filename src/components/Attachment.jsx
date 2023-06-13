import React from 'react';
import Attachment_ from './../Icons/attachment.svg';
const Attachment = (props) => {
  return (
    <img src={Attachment_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Attachment;
