import React from 'react';
import DrinkMartini_ from './../Icons/drinkMartini.svg';
const DrinkMartini = (props) => {
  return (
    <img src={DrinkMartini_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DrinkMartini;
