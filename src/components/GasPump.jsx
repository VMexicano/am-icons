import React from 'react';
import GasPump_ from './../Icons/gasPump.svg';
const GasPump = (props) => {
  return (
    <img src={GasPump_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GasPump;
