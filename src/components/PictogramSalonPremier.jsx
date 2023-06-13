import React from 'react';
import PictogramSalonPremier_ from './../Icons/pictogramSalonPremier.svg';
const PictogramSalonPremier = (props) => {
  return (
    <img src={PictogramSalonPremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramSalonPremier;
