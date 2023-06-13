import React from 'react';
import FareBasic_ from './../Icons/fareBasic.svg';
const FareBasic = (props) => {
  return (
    <img src={FareBasic_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FareBasic;
