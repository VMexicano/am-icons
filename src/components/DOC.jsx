import React from 'react';
import DOC_ from './../Icons/dOC.svg';
const DOC = (props) => {
  return (
    <img src={DOC_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DOC;
