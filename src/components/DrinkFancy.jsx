import React from 'react';
import DrinkFancy_ from './../Icons/drinkFancy.svg';
const DrinkFancy = (props) => {
  return (
    <img src={DrinkFancy_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DrinkFancy;
