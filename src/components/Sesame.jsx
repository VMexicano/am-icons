import React from 'react';
import Sesame_ from './../Icons/sesame.svg';
const Sesame = (props) => {
  return (
    <img src={Sesame_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sesame;
