import React from 'react';
import HouseEco_ from './../Icons/houseEco.svg';
const HouseEco = (props) => {
  return (
    <img src={HouseEco_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HouseEco;
