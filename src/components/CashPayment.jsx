import React from 'react';
import CashPayment_ from './../Icons/cashPayment.svg';
const CashPayment = (props) => {
  return (
    <img src={CashPayment_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CashPayment;
