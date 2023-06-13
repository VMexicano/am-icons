import React from 'react';
import Auto_ from './../Icons/auto.svg';
const Auto = (props) => {
  return (
    <img src={Auto_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Auto;
