import React from 'react';
import Liberia_ from './../Icons/liberia.svg';
const Liberia = (props) => {
  return (
    <img src={Liberia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Liberia;
