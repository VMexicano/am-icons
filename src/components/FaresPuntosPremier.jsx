import React from 'react';
import FaresPuntosPremier_ from './../Icons/faresPuntosPremier.svg';
const FaresPuntosPremier = (props) => {
  return (
    <img src={FaresPuntosPremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresPuntosPremier;
