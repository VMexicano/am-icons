import React from 'react';
import PDF_ from './../Icons/pDF.svg';
const PDF = (props) => {
  return (
    <img src={PDF_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PDF;
