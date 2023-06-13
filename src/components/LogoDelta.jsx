import React from 'react';
import LogoDelta_ from './../Icons/logoDelta.svg';
const LogoDelta = (props) => {
  return (
    <img src={LogoDelta_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LogoDelta;
