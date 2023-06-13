import React from 'react';
import SquareClock_ from './../Icons/squareClock.svg';
const SquareClock = (props) => {
  return (
    <img src={SquareClock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SquareClock;
