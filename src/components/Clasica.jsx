import React from 'react';
import Clasica_ from './../Icons/clasica.svg';
const Clasica = (props) => {
  return (
    <img src={Clasica_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Clasica;
