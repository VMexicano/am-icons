import React from 'react';
import HandDocument_ from './../Icons/handDocument.svg';
const HandDocument = (props) => {
  return (
    <img src={HandDocument_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandDocument;
