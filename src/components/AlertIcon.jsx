import React from 'react';
import AlertIcon_ from './../Icons/alertIcon.svg';
const AlertIcon = (props) => {
  return (
    <img src={AlertIcon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AlertIcon;
