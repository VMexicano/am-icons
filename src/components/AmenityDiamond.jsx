import React from 'react';
import AmenityDiamond_ from './../Icons/amenityDiamond.svg';
const AmenityDiamond = (props) => {
  return (
    <img src={AmenityDiamond_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityDiamond;
