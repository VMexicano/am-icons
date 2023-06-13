import React from 'react';
import BridgeSanFransico_ from './../Icons/bridgeSanFransico.svg';
const BridgeSanFransico = (props) => {
  return (
    <img src={BridgeSanFransico_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BridgeSanFransico;
