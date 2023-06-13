import React from 'react';
import Reembolsos_ from './../Icons/reembolsos.svg';
const Reembolsos = (props) => {
  return (
    <img src={Reembolsos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Reembolsos;
