import React from 'react';
import TuViaje_ from './../Icons/tuViaje.svg';
const TuViaje = (props) => {
  return (
    <img src={TuViaje_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TuViaje;
