import React from 'react';
import Pencil_ from './../Icons/pencil.svg';
const Pencil = (props) => {
  return (
    <img src={Pencil_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Pencil;
