import React from 'react';
import Pizza_ from './../Icons/pizza.svg';
const Pizza = (props) => {
  return (
    <img src={Pizza_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Pizza;
