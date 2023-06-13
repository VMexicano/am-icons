import React from 'react';
import Diamond_ from './../Icons/diamond.svg';
const Diamond = (props) => {
  return (
    <img src={Diamond_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Diamond;
