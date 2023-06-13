import React from 'react';
import RentACar_ from './../Icons/rentACar.svg';
const RentACar = (props) => {
  return (
    <img src={RentACar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RentACar;
