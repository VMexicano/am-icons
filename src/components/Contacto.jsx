import React from 'react';
import Contacto_ from './../Icons/contacto.svg';
const Contacto = (props) => {
  return (
    <img src={Contacto_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Contacto;
