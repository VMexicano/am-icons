import React from 'react';
import MCO_ from './../Icons/mCO.svg';
const MCO = (props) => {
  return (
    <img src={MCO_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MCO;
