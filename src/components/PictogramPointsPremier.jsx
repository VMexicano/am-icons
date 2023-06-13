import React from 'react';
import PictogramPointsPremier_ from './../Icons/pictogramPointsPremier.svg';
const PictogramPointsPremier = (props) => {
  return (
    <img src={PictogramPointsPremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramPointsPremier;
