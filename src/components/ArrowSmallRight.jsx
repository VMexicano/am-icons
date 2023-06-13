import React from 'react';
import ArrowSmallRight_ from './../Icons/arrowSmallRight.svg';
const ArrowSmallRight = (props) => {
  return (
    <img src={ArrowSmallRight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowSmallRight;
