import React from 'react';
import Food_ from './../Icons/food.svg';
const Food = (props) => {
  return (
    <img src={Food_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Food;
