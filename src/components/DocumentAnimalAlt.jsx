import React from 'react';
import DocumentAnimalAlt_ from './../Icons/documentAnimalAlt.svg';
const DocumentAnimalAlt = (props) => {
  return (
    <img src={DocumentAnimalAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DocumentAnimalAlt;
