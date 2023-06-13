import React from 'react';
import Sneaker_ from './../Icons/sneaker.svg';
const Sneaker = (props) => {
  return (
    <img src={Sneaker_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sneaker;
