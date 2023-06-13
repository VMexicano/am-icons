import React from 'react';
import Apartment_ from './../Icons/apartment.svg';
const Apartment = (props) => {
  return (
    <img src={Apartment_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Apartment;
