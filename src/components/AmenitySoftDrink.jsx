import React from 'react';
import AmenitySoftDrink_ from './../Icons/amenitySoftDrink.svg';
const AmenitySoftDrink = (props) => {
  return (
    <img src={AmenitySoftDrink_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenitySoftDrink;
