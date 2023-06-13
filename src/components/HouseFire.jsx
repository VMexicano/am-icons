import React from 'react';
import HouseFire_ from './../Icons/houseFire.svg';
const HouseFire = (props) => {
  return (
    <img src={HouseFire_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HouseFire;
