import React from 'react';
import StopCross_ from './../Icons/stopCross.svg';
const StopCross = (props) => {
  return (
    <img src={StopCross_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StopCross;
