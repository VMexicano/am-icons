import React from 'react';
import Battery_ from './../Icons/battery.svg';
const Battery = (props) => {
  return (
    <img src={Battery_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Battery;
