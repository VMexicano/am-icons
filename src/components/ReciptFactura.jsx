import React from 'react';
import ReciptFactura_ from './../Icons/reciptFactura.svg';
const ReciptFactura = (props) => {
  return (
    <img src={ReciptFactura_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ReciptFactura;
