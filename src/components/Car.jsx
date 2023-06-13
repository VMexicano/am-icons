import React from 'react';
import Car_ from './../Icons/car.svg';
const Car = (props) => {
  return (
    <img src={Car_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Car;
