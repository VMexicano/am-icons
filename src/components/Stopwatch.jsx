import React from 'react';
import Stopwatch_ from './../Icons/stopwatch.svg';
const Stopwatch = (props) => {
  return (
    <img src={Stopwatch_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Stopwatch;
