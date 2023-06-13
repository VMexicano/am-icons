import React from 'react';
import CookingGlovesGuantes_ from './../Icons/cookingGlovesGuantes.svg';
const CookingGlovesGuantes = (props) => {
  return (
    <img src={CookingGlovesGuantes_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CookingGlovesGuantes;
