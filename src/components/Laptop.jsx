import React from 'react';
import Laptop_ from './../Icons/laptop.svg';
const Laptop = (props) => {
  return (
    <img src={Laptop_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Laptop;
