import React from 'react';
import Flowers_ from './../Icons/flowers.svg';
const Flowers = (props) => {
  return (
    <img src={Flowers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Flowers;
