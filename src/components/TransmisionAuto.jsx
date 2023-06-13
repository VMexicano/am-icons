import React from 'react';
import TransmisionAuto_ from './../Icons/transmisionAuto.svg';
const TransmisionAuto = (props) => {
  return (
    <img src={TransmisionAuto_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TransmisionAuto;
