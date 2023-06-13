import React from 'react';
import CreditCard_ from './../Icons/creditCard.svg';
const CreditCard = (props) => {
  return (
    <img src={CreditCard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CreditCard;
