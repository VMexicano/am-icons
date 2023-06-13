import React from 'react';
import SmartphoneRinging_ from './../Icons/smartphoneRinging.svg';
const SmartphoneRinging = (props) => {
  return (
    <img src={SmartphoneRinging_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartphoneRinging;
