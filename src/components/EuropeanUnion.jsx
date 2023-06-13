import React from 'react';
import EuropeanUnion_ from './../Icons/europeanUnion.svg';
const EuropeanUnion = (props) => {
  return (
    <img src={EuropeanUnion_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EuropeanUnion;
