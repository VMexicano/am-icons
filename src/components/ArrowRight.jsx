import React from 'react';
import ArrowRight_ from './../Icons/arrowRight.svg';
const ArrowRight = (props) => {
  return (
    <img src={ArrowRight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowRight;
