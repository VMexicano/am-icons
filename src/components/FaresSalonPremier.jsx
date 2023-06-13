import React from 'react';
import FaresSalonPremier_ from './../Icons/faresSalonPremier.svg';
const FaresSalonPremier = (props) => {
  return (
    <img src={FaresSalonPremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FaresSalonPremier;
