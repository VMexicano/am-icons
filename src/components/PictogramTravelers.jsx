import React from 'react';
import PictogramTravelers_ from './../Icons/pictogramTravelers.svg';
const PictogramTravelers = (props) => {
  return (
    <img src={PictogramTravelers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramTravelers;
