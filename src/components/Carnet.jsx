import React from 'react';
import Carnet_ from './../Icons/carnet.svg';
const Carnet = (props) => {
  return (
    <img src={Carnet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Carnet;
