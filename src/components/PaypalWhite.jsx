import React from 'react';
import PaypalWhite_ from './../Icons/paypalWhite.svg';
const PaypalWhite = (props) => {
  return (
    <img src={PaypalWhite_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PaypalWhite;
