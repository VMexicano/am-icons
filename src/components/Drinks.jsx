import React from 'react';
import Drinks_ from './../Icons/drinks.svg';
const Drinks = (props) => {
  return (
    <img src={Drinks_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Drinks;
