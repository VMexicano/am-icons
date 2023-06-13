import React from 'react';
import Notificaciones_ from './../Icons/notificaciones.svg';
const Notificaciones = (props) => {
  return (
    <img src={Notificaciones_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Notificaciones;
