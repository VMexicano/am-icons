import React from 'react';
import Layers_ from './../Icons/layers.svg';
const Layers = (props) => {
  return (
    <img src={Layers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Layers;
