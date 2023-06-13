import React from 'react';
import PictogramCrown_ from './../Icons/pictogramCrown.svg';
const PictogramCrown = (props) => {
  return (
    <img src={PictogramCrown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramCrown;
