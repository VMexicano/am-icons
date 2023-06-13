import React from 'react';
import PictogramBagsExtra_ from './../Icons/pictogramBagsExtra.svg';
const PictogramBagsExtra = (props) => {
  return (
    <img src={PictogramBagsExtra_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramBagsExtra;
