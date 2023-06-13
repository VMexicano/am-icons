import React from 'react';
import Basica_ from './../Icons/basica.svg';
const Basica = (props) => {
  return (
    <img src={Basica_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Basica;
