import React from 'react';
import TarjetaDeCredito_ from './../Icons/tarjetaDeCredito.svg';
const TarjetaDeCredito = (props) => {
  return (
    <img src={TarjetaDeCredito_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TarjetaDeCredito;
