import React from 'react';
import FaresRefund_ from './../Icons/faresRefund.svg';
const FaresRefund = (props) => {
  return (
    <img src={FaresRefund_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresRefund;
