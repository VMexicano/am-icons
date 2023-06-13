import React from 'react';
import Milk_ from './../Icons/milk.svg';
const Milk = (props) => {
  return (
    <img src={Milk_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Milk;
