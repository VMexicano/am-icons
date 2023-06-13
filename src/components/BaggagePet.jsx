import React from 'react';
import BaggagePet_ from './../Icons/baggagePet.svg';
const BaggagePet = (props) => {
  return (
    <img src={BaggagePet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BaggagePet;
