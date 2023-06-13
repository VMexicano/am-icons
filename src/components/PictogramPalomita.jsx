import React from 'react';
import PictogramPalomita_ from './../Icons/pictogramPalomita.svg';
const PictogramPalomita = (props) => {
  return (
    <img src={PictogramPalomita_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramPalomita;
