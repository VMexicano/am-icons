import React from 'react';
import NonRefundable_ from './../Icons/nonRefundable.svg';
const NonRefundable = (props) => {
  return (
    <img src={NonRefundable_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NonRefundable;
