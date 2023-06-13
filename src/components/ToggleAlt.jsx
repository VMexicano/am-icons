import React from 'react';
import ToggleAlt_ from './../Icons/toggleAlt.svg';
const ToggleAlt = (props) => {
  return (
    <img src={ToggleAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ToggleAlt;
