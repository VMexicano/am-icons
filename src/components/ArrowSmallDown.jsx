import React from 'react';
import ArrowSmallDown_ from './../Icons/arrowSmallDown.svg';
const ArrowSmallDown = (props) => {
  return (
    <img src={ArrowSmallDown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowSmallDown;
