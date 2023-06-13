import React from 'react';
import PaymentMethod_ from './../Icons/paymentMethod.svg';
const PaymentMethod = (props) => {
  return (
    <img src={PaymentMethod_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PaymentMethod;
