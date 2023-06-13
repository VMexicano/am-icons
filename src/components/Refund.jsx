import React from 'react';
import Refund_ from './../Icons/refund.svg';
const Refund = (props) => {
  return (
    <img src={Refund_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Refund;
