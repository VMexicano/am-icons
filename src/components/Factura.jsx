import React from 'react';
import Factura_ from './../Icons/factura.svg';
const Factura = (props) => {
  return (
    <img src={Factura_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Factura;
