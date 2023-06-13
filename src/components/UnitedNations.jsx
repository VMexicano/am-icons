import React from 'react';
import UnitedNations_ from './../Icons/unitedNations.svg';
const UnitedNations = (props) => {
  return (
    <img src={UnitedNations_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UnitedNations;
