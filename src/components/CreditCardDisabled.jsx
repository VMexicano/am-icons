import React from 'react';
import CreditCardDisabled_ from './../Icons/creditCardDisabled.svg';
const CreditCardDisabled = (props) => {
  return (
    <img src={CreditCardDisabled_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CreditCardDisabled;
