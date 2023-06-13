import React from 'react';
import TouchSwipeDown_ from './../Icons/touchSwipeDown.svg';
const TouchSwipeDown = (props) => {
  return (
    <img src={TouchSwipeDown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchSwipeDown;
