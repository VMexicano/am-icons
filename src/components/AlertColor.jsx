import React from 'react';
import AlertColor_ from './../Icons/alertColor.svg';
const AlertColor = (props) => {
  return (
    <img src={AlertColor_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AlertColor;
