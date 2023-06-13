import React from 'react';
import SeatsIconPremier_ from './../Icons/seatsIconPremier.svg';
const SeatsIconPremier = (props) => {
  return (
    <img src={SeatsIconPremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SeatsIconPremier;
