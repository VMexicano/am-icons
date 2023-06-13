import React from 'react';
import Fabric_ from './../Icons/fabric.svg';
const Fabric = (props) => {
  return (
    <img src={Fabric_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fabric;
