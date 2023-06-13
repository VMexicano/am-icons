import React from 'react';
import Salones_ from './../Icons/salones.svg';
const Salones = (props) => {
  return (
    <img src={Salones_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Salones;
