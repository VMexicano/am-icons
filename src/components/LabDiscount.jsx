import React from 'react';
import LabDiscount_ from './../Icons/labDiscount.svg';
const LabDiscount = (props) => {
  return (
    <img src={LabDiscount_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LabDiscount;
