import React from 'react';
import TouchSwipeLeft_ from './../Icons/touchSwipeLeft.svg';
const TouchSwipeLeft = (props) => {
  return (
    <img src={TouchSwipeLeft_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchSwipeLeft;
