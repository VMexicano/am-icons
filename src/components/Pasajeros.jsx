import React from 'react';
import Pasajeros_ from './../Icons/pasajeros.svg';
const Pasajeros = (props) => {
  return (
    <img src={Pasajeros_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Pasajeros;
