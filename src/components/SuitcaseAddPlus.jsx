import React from 'react';
import SuitcaseAddPlus_ from './../Icons/suitcaseAddPlus.svg';
const SuitcaseAddPlus = (props) => {
  return (
    <img src={SuitcaseAddPlus_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SuitcaseAddPlus;
