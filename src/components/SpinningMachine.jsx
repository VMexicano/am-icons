import React from 'react';
import SpinningMachine_ from './../Icons/spinningMachine.svg';
const SpinningMachine = (props) => {
  return (
    <img src={SpinningMachine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SpinningMachine;
