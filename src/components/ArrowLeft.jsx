import React from 'react';
import ArrowLeft_ from './../Icons/arrowLeft.svg';
const ArrowLeft = (props) => {
  return (
    <img src={ArrowLeft_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowLeft;
