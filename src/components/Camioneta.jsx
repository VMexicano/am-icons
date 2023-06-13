import React from 'react';
import Camioneta_ from './../Icons/camioneta.svg';
const Camioneta = (props) => {
  return (
    <img src={Camioneta_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Camioneta;
