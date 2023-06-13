import React from 'react';
import CookingFood_ from './../Icons/cookingFood.svg';
const CookingFood = (props) => {
  return (
    <img src={CookingFood_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CookingFood;
