import React from 'react';
import ChevronDown_ from './../Icons/chevronDown.svg';
const ChevronDown = (props) => {
  return (
    <img src={ChevronDown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChevronDown;
