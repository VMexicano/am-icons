import React from 'react';
import Barbados_ from './../Icons/barbados.svg';
const Barbados = (props) => {
  return (
    <img src={Barbados_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Barbados;
