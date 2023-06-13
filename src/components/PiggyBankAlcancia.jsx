import React from 'react';
import PiggyBankAlcancia_ from './../Icons/piggyBankAlcancia.svg';
const PiggyBankAlcancia = (props) => {
  return (
    <img src={PiggyBankAlcancia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PiggyBankAlcancia;
