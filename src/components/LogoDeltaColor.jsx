import React from 'react';
import LogoDeltaColor_ from './../Icons/logoDeltaColor.svg';
const LogoDeltaColor = (props) => {
  return (
    <img src={LogoDeltaColor_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LogoDeltaColor;
