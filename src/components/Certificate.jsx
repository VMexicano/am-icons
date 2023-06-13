import React from 'react';
import Certificate_ from './../Icons/certificate.svg';
const Certificate = (props) => {
  return (
    <img src={Certificate_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Certificate;
