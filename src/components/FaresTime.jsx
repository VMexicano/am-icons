import React from 'react';
import FaresTime_ from './../Icons/faresTime.svg';
const FaresTime = (props) => {
  return (
    <img src={FaresTime_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresTime;
