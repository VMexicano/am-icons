import React from 'react';
import AmenityApple_ from './../Icons/amenityApple.svg';
const AmenityApple = (props) => {
  return (
    <img src={AmenityApple_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityApple;
