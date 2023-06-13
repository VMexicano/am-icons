import React from 'react';
import CreditCardNormal_ from './../Icons/creditCardNormal.svg';
const CreditCardNormal = (props) => {
  return (
    <img src={CreditCardNormal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CreditCardNormal;
