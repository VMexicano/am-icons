import React from 'react';
import ServEspeciales_ from './../Icons/servEspeciales.svg';
const ServEspeciales = (props) => {
  return (
    <img src={ServEspeciales_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ServEspeciales;
