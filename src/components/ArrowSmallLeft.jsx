import React from 'react';
import ArrowSmallLeft_ from './../Icons/arrowSmallLeft.svg';
const ArrowSmallLeft = (props) => {
  return (
    <img src={ArrowSmallLeft_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowSmallLeft;
