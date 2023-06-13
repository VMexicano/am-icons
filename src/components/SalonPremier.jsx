import React from 'react';
import SalonPremier_ from './../Icons/salonPremier.svg';
const SalonPremier = (props) => {
  return (
    <img src={SalonPremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SalonPremier;
