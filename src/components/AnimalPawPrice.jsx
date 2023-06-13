import React from 'react';
import AnimalPawPrice_ from './../Icons/animalPawPrice.svg';
const AnimalPawPrice = (props) => {
  return (
    <img src={AnimalPawPrice_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AnimalPawPrice;
