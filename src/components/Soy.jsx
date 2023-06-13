import React from 'react';
import Soy_ from './../Icons/soy.svg';
const Soy = (props) => {
  return (
    <img src={Soy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Soy;
