import React from 'react';
import Corsica_ from './../Icons/corsica.svg';
const Corsica = (props) => {
  return (
    <img src={Corsica_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Corsica;
