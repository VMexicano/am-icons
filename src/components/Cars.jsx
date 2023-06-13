import React from 'react';
import Cars_ from './../Icons/cars.svg';
const Cars = (props) => {
  return (
    <img src={Cars_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cars;
