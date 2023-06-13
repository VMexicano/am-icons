import React from 'react';
import FireFlame_ from './../Icons/fireFlame.svg';
const FireFlame = (props) => {
  return (
    <img src={FireFlame_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FireFlame;
