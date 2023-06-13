import React from 'react';
import VentaAzul_ from './../Icons/ventaAzul.svg';
const VentaAzul = (props) => {
  return (
    <img src={VentaAzul_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VentaAzul;
