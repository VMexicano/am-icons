import React from 'react';
import StopwatchAlt_ from './../Icons/stopwatchAlt.svg';
const StopwatchAlt = (props) => {
  return (
    <img src={StopwatchAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StopwatchAlt;
