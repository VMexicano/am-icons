import React from 'react';
import VuelaVerde_ from './../Icons/vuelaVerde.svg';
const VuelaVerde = (props) => {
  return (
    <img src={VuelaVerde_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VuelaVerde;
