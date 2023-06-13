import React from 'react';
import AlertRedLine_ from './../Icons/alertRedLine.svg';
const AlertRedLine = (props) => {
  return (
    <img src={AlertRedLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AlertRedLine;
