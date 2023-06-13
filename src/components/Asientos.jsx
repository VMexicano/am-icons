import React from 'react';
import Asientos_ from './../Icons/asientos.svg';
const Asientos = (props) => {
  return (
    <img src={Asientos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Asientos;
