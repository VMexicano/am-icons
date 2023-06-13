import React from 'react';
import CheckCircle_ from './../Icons/checkCircle.svg';
const CheckCircle = (props) => {
  return (
    <img src={CheckCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CheckCircle;
