import React from 'react';
import ArrowSwitch_ from './../Icons/arrowSwitch.svg';
const ArrowSwitch = (props) => {
  return (
    <img src={ArrowSwitch_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ArrowSwitch;
