import React from 'react';
import StairsDown_ from './../Icons/stairsDown.svg';
const StairsDown = (props) => {
  return (
    <img src={StairsDown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StairsDown;
