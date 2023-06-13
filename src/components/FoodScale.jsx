import React from 'react';
import FoodScale_ from './../Icons/foodScale.svg';
const FoodScale = (props) => {
  return (
    <img src={FoodScale_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FoodScale;
