import React from 'react';
import ElectricytPlug_ from './../Icons/electricytPlug.svg';
const ElectricytPlug = (props) => {
  return (
    <img src={ElectricytPlug_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ElectricytPlug;
