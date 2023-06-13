import React from 'react';
import SmartPhoneSms_ from './../Icons/smartPhoneSms.svg';
const SmartPhoneSms = (props) => {
  return (
    <img src={SmartPhoneSms_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartPhoneSms;
