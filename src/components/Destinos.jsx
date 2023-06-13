import React from 'react';
import Destinos_ from './../Icons/destinos.svg';
const Destinos = (props) => {
  return (
    <img src={Destinos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Destinos;
