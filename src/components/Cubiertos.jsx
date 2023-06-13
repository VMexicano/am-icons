import React from 'react';
import Cubiertos_ from './../Icons/cubiertos.svg';
const Cubiertos = (props) => {
  return (
    <img src={Cubiertos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cubiertos;
