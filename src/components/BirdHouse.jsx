import React from 'react';
import BirdHouse_ from './../Icons/birdHouse.svg';
const BirdHouse = (props) => {
  return (
    <img src={BirdHouse_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BirdHouse;
