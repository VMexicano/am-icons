import React from 'react';
import ElectronicReader_ from './../Icons/electronicReader.svg';
const ElectronicReader = (props) => {
  return (
    <img src={ElectronicReader_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ElectronicReader;
