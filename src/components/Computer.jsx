import React from 'react';
import Computer_ from './../Icons/computer.svg';
const Computer = (props) => {
  return (
    <img src={Computer_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Computer;
