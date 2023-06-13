import React from 'react';
import BoxWheel_ from './../Icons/boxWheel.svg';
const BoxWheel = (props) => {
  return (
    <img src={BoxWheel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BoxWheel;
