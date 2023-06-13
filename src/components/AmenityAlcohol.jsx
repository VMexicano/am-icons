import React from 'react';
import AmenityAlcohol_ from './../Icons/amenityAlcohol.svg';
const AmenityAlcohol = (props) => {
  return (
    <img src={AmenityAlcohol_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityAlcohol;
