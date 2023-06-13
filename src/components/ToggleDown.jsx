import React from 'react';
import ToggleDown_ from './../Icons/toggleDown.svg';
const ToggleDown = (props) => {
  return (
    <img src={ToggleDown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ToggleDown;
