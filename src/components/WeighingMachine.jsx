import React from 'react';
import WeighingMachine_ from './../Icons/weighingMachine.svg';
const WeighingMachine = (props) => {
  return (
    <img src={WeighingMachine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WeighingMachine;
