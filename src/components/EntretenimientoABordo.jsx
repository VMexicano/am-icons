import React from 'react';
import EntretenimientoABordo_ from './../Icons/entretenimientoABordo.svg';
const EntretenimientoABordo = (props) => {
  return (
    <img src={EntretenimientoABordo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EntretenimientoABordo;
