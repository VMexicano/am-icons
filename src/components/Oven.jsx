import React from 'react';
import Oven_ from './../Icons/oven.svg';
const Oven = (props) => {
  return (
    <img src={Oven_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Oven;
