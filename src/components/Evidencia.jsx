import React from 'react';
import Evidencia_ from './../Icons/evidencia.svg';
const Evidencia = (props) => {
  return (
    <img src={Evidencia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Evidencia;
