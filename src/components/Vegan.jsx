import React from 'react';
import Vegan_ from './../Icons/vegan.svg';
const Vegan = (props) => {
  return (
    <img src={Vegan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Vegan;
