import React from 'react';
import MoneyBagEuro_ from './../Icons/moneyBagEuro.svg';
const MoneyBagEuro = (props) => {
  return (
    <img src={MoneyBagEuro_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MoneyBagEuro;
