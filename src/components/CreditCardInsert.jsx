import React from 'react';
import CreditCardInsert_ from './../Icons/creditCardInsert.svg';
const CreditCardInsert = (props) => {
  return (
    <img src={CreditCardInsert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CreditCardInsert;
