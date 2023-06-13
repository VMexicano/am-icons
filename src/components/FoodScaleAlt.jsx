import React from 'react';
import FoodScaleAlt_ from './../Icons/foodScaleAlt.svg';
const FoodScaleAlt = (props) => {
  return (
    <img src={FoodScaleAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FoodScaleAlt;
