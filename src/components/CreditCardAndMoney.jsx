import React from 'react';
import CreditCardAndMoney_ from './../Icons/creditCardAndMoney.svg';
const CreditCardAndMoney = (props) => {
  return (
    <img src={CreditCardAndMoney_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CreditCardAndMoney;
