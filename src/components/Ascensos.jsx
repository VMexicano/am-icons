import React from 'react';
import Ascensos_ from './../Icons/ascensos.svg';
const Ascensos = (props) => {
  return (
    <img src={Ascensos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ascensos;
