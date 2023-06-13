import React from 'react';
import Paypal_ from './../Icons/paypal.svg';
const Paypal = (props) => {
  return (
    <img src={Paypal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Paypal;
