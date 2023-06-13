import React from 'react';
import ArrowSmallUp_ from './../Icons/arrowSmallUp.svg';
const ArrowSmallUp = (props) => {
  return (
    <img src={ArrowSmallUp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowSmallUp;
