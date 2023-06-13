import React from 'react';
import PremierFood_ from './../Icons/premierFood.svg';
const PremierFood = (props) => {
  return (
    <img src={PremierFood_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierFood;
