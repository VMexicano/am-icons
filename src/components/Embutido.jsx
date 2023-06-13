import React from 'react';
import Embutido_ from './../Icons/embutido.svg';
const Embutido = (props) => {
  return (
    <img src={Embutido_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Embutido;
