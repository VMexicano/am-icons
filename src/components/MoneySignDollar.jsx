import React from 'react';
import MoneySignDollar_ from './../Icons/moneySignDollar.svg';
const MoneySignDollar = (props) => {
  return (
    <img src={MoneySignDollar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MoneySignDollar;
