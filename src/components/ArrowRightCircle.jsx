import React from 'react';
import ArrowRightCircle_ from './../Icons/arrowRightCircle.svg';
const ArrowRightCircle = (props) => {
  return (
    <img src={ArrowRightCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowRightCircle;
