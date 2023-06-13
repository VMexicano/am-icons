import React from 'react';
import SmartphoneFingerprint_ from './../Icons/smartphoneFingerprint.svg';
const SmartphoneFingerprint = (props) => {
  return (
    <img src={SmartphoneFingerprint_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartphoneFingerprint;
