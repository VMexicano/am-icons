import React from 'react';
import PremierDrinks_ from './../Icons/premierDrinks.svg';
const PremierDrinks = (props) => {
  return (
    <img src={PremierDrinks_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierDrinks;
