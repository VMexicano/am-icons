import React from 'react';
import CarOptionBrand_ from './../Icons/carOptionBrand.svg';
const CarOptionBrand = (props) => {
  return (
    <img src={CarOptionBrand_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CarOptionBrand;
