import React from 'react';
import PencilRuler_ from './../Icons/pencilRuler.svg';
const PencilRuler = (props) => {
  return (
    <img src={PencilRuler_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PencilRuler;
