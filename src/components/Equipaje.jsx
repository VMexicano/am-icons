import React from 'react';
import Equipaje_ from './../Icons/equipaje.svg';
const Equipaje = (props) => {
  return (
    <img src={Equipaje_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Equipaje;
