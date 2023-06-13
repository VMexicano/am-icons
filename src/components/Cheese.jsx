import React from 'react';
import Cheese_ from './../Icons/cheese.svg';
const Cheese = (props) => {
  return (
    <img src={Cheese_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cheese;
