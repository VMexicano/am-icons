import React from 'react';
import OfertasDeVuelos_ from './../Icons/ofertasDeVuelos.svg';
const OfertasDeVuelos = (props) => {
  return (
    <img src={OfertasDeVuelos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OfertasDeVuelos;
