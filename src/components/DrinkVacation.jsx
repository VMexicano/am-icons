import React from 'react';
import DrinkVacation_ from './../Icons/drinkVacation.svg';
const DrinkVacation = (props) => {
  return (
    <img src={DrinkVacation_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DrinkVacation;
