import React from 'react';
import Clock_ from './../Icons/clock.svg';
const Clock = (props) => {
  return (
    <img src={Clock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Clock;
