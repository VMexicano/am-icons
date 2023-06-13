import React from 'react';
import CalculatorAlt_ from './../Icons/calculatorAlt.svg';
const CalculatorAlt = (props) => {
  return (
    <img src={CalculatorAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CalculatorAlt;
