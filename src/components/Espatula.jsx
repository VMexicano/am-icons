import React from 'react';
import Espatula_ from './../Icons/espatula.svg';
const Espatula = (props) => {
  return (
    <img src={Espatula_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Espatula;
