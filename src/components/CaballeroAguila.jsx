import React from 'react';
import CaballeroAguila_ from './../Icons/caballeroAguila.svg';
const CaballeroAguila = (props) => {
  return (
    <img src={CaballeroAguila_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CaballeroAguila;
