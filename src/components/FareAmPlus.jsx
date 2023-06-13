import React from 'react';
import FareAmPlus_ from './../Icons/fareAmPlus.svg';
const FareAmPlus = (props) => {
  return (
    <img src={FareAmPlus_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FareAmPlus;
