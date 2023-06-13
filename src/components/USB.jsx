import React from 'react';
import USB_ from './../Icons/uSB.svg';
const USB = (props) => {
  return (
    <img src={USB_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default USB;
