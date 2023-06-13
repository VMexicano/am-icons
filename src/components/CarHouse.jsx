import React from 'react';
import CarHouse_ from './../Icons/carHouse.svg';
const CarHouse = (props) => {
  return (
    <img src={CarHouse_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarHouse;
