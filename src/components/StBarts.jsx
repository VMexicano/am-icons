import React from 'react';
import StBarts_ from './../Icons/stBarts.svg';
const StBarts = (props) => {
  return (
    <img src={StBarts_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StBarts;
