import React from 'react';
import CurrencyExchange_ from './../Icons/currencyExchange.svg';
const CurrencyExchange = (props) => {
  return (
    <img src={CurrencyExchange_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CurrencyExchange;
