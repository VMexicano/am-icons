import React from 'react';
import Cycle_ from './../Icons/cycle.svg';
const Cycle = (props) => {
  return (
    <img src={Cycle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cycle;
