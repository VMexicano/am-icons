import React from 'react';
import DocumentAnimal_ from './../Icons/documentAnimal.svg';
const DocumentAnimal = (props) => {
  return (
    <img src={DocumentAnimal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DocumentAnimal;
