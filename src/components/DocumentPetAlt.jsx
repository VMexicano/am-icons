import React from 'react';
import DocumentPetAlt_ from './../Icons/documentPetAlt.svg';
const DocumentPetAlt = (props) => {
  return (
    <img src={DocumentPetAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DocumentPetAlt;
