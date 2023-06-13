import React from 'react';
import CarfourDoors_ from './../Icons/carfourDoors.svg';
const CarfourDoors = (props) => {
  return (
    <img src={CarfourDoors_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarfourDoors;
