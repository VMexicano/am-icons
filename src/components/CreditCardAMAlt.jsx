import React from 'react';
import CreditCardAMAlt_ from './../Icons/creditCardAMAlt.svg';
const CreditCardAMAlt = (props) => {
  return (
    <img src={CreditCardAMAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CreditCardAMAlt;
