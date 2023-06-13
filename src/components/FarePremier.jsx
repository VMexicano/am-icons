import React from 'react';
import FarePremier_ from './../Icons/farePremier.svg';
const FarePremier = (props) => {
  return (
    <img src={FarePremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FarePremier;
