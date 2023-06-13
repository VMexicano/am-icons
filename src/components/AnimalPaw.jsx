import React from 'react';
import AnimalPaw_ from './../Icons/animalPaw.svg';
const AnimalPaw = (props) => {
  return (
    <img src={AnimalPaw_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AnimalPaw;
