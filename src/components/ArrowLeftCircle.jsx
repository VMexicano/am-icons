import React from 'react';
import ArrowLeftCircle_ from './../Icons/arrowLeftCircle.svg';
const ArrowLeftCircle = (props) => {
  return (
    <img src={ArrowLeftCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowLeftCircle;
