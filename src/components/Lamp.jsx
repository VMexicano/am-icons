import React from 'react';
import Lamp_ from './../Icons/lamp.svg';
const Lamp = (props) => {
  return (
    <img src={Lamp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lamp;
