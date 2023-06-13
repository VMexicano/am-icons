import React from 'react';
import TouchSwipeRight_ from './../Icons/touchSwipeRight.svg';
const TouchSwipeRight = (props) => {
  return (
    <img src={TouchSwipeRight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchSwipeRight;
