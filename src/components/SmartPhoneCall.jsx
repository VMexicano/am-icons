import React from 'react';
import SmartPhoneCall_ from './../Icons/smartPhoneCall.svg';
const SmartPhoneCall = (props) => {
  return (
    <img src={SmartPhoneCall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartPhoneCall;
