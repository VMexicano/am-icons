import React from 'react';
import ErrorDisconnection_ from './../Icons/errorDisconnection.svg';
const ErrorDisconnection = (props) => {
  return (
    <img src={ErrorDisconnection_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ErrorDisconnection;
