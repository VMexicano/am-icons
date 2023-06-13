import React from 'react';
import Dominica_ from './../Icons/dominica.svg';
const Dominica = (props) => {
  return (
    <img src={Dominica_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Dominica;
