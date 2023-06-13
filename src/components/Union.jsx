import React from 'react';
import Union_ from './../Icons/union.svg';
const Union = (props) => {
  return (
    <img src={Union_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Union;
