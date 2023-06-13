import React from 'react';
import Calculator_ from './../Icons/calculator.svg';
const Calculator = (props) => {
  return (
    <img src={Calculator_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Calculator;
