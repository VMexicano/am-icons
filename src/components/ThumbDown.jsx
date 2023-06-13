import React from 'react';
import ThumbDown_ from './../Icons/thumbDown.svg';
const ThumbDown = (props) => {
  return (
    <img src={ThumbDown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ThumbDown;
