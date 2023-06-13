import React from 'react';
import EspacioEntreAsientos_ from './../Icons/espacioEntreAsientos.svg';
const EspacioEntreAsientos = (props) => {
  return (
    <img src={EspacioEntreAsientos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EspacioEntreAsientos;
