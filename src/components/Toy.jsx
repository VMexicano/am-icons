import React from 'react';
import Toy_ from './../Icons/toy.svg';
const Toy = (props) => {
  return (
    <img src={Toy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Toy;
