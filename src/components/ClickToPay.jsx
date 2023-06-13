import React from 'react';
import ClickToPay_ from './../Icons/clickToPay.svg';
const ClickToPay = (props) => {
  return (
    <img src={ClickToPay_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ClickToPay;
