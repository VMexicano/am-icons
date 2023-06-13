import React from 'react';
import Preguntas_ from './../Icons/preguntas.svg';
const Preguntas = (props) => {
  return (
    <img src={Preguntas_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Preguntas;
