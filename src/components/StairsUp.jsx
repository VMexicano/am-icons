import React from 'react';
import StairsUp_ from './../Icons/stairsUp.svg';
const StairsUp = (props) => {
  return (
    <img src={StairsUp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StairsUp;
