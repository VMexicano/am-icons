import React from 'react';
import CageTransportadora_ from './../Icons/cageTransportadora.svg';
const CageTransportadora = (props) => {
  return (
    <img src={CageTransportadora_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CageTransportadora;
