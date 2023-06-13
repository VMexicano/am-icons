import React from 'react';
import Mascotas_ from './../Icons/mascotas.svg';
const Mascotas = (props) => {
  return (
    <img src={Mascotas_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mascotas;
