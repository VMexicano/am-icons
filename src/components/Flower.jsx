import React from 'react';
import Flower_ from './../Icons/flower.svg';
const Flower = (props) => {
  return (
    <img src={Flower_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Flower;
