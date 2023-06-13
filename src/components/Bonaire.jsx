import React from 'react';
import Bonaire_ from './../Icons/bonaire.svg';
const Bonaire = (props) => {
  return (
    <img src={Bonaire_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bonaire;
