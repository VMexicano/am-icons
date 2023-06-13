import React from 'react';
import Clock2_ from './../Icons/clock2.svg';
const Clock2 = (props) => {
  return (
    <img src={Clock2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Clock2;
