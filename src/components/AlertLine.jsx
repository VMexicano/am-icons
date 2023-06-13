import React from 'react';
import AlertLine_ from './../Icons/alertLine.svg';
const AlertLine = (props) => {
  return (
    <img src={AlertLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AlertLine;
