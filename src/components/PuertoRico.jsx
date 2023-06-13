import React from 'react';
import PuertoRico_ from './../Icons/puertoRico.svg';
const PuertoRico = (props) => {
  return (
    <img src={PuertoRico_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PuertoRico;
