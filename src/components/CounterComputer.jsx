import React from 'react';
import CounterComputer_ from './../Icons/counterComputer.svg';
const CounterComputer = (props) => {
  return (
    <img src={CounterComputer_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CounterComputer;
