import React from 'react';
import Alert_ from './../Icons/alert.svg';
const Alert = (props) => {
  return (
    <img src={Alert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Alert;
