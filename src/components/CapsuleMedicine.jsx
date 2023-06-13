import React from 'react';
import CapsuleMedicine_ from './../Icons/capsuleMedicine.svg';
const CapsuleMedicine = (props) => {
  return (
    <img src={CapsuleMedicine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CapsuleMedicine;
