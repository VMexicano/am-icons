import React from 'react';
import PermierLight_ from './../Icons/permierLight.svg';
const PermierLight = (props) => {
  return (
    <img src={PermierLight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PermierLight;
