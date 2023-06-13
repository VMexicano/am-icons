import React from 'react';
import SeguroDeViaje_ from './../Icons/seguroDeViaje.svg';
const SeguroDeViaje = (props) => {
  return (
    <img src={SeguroDeViaje_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeguroDeViaje;
