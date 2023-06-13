import React from 'react';
import TouchSwipeUp_ from './../Icons/touchSwipeUp.svg';
const TouchSwipeUp = (props) => {
  return (
    <img src={TouchSwipeUp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchSwipeUp;
