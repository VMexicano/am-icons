import React from 'react';
import PuntosPermier_ from './../Icons/puntosPermier.svg';
const PuntosPermier = (props) => {
  return (
    <img src={PuntosPermier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PuntosPermier;
