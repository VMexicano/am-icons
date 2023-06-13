import React from 'react';
import PictogramAirport_ from './../Icons/pictogramAirport.svg';
const PictogramAirport = (props) => {
  return (
    <img src={PictogramAirport_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramAirport;
