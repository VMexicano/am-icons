import React from 'react';
import StopSign_ from './../Icons/stopSign.svg';
const StopSign = (props) => {
  return (
    <img src={StopSign_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StopSign;
