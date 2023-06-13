import React from 'react';
import ToggleUp_ from './../Icons/toggleUp.svg';
const ToggleUp = (props) => {
  return (
    <img src={ToggleUp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ToggleUp;
