import React from 'react';
import PaymentTravelBank_ from './../Icons/paymentTravelBank.svg';
const PaymentTravelBank = (props) => {
  return (
    <img src={PaymentTravelBank_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PaymentTravelBank;
