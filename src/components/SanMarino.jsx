import React from 'react';
import SanMarino_ from './../Icons/sanMarino.svg';
const SanMarino = (props) => {
  return (
    <img src={SanMarino_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SanMarino;
