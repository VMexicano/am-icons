import React from 'react';
import PictogramPlane_ from './../Icons/pictogramPlane.svg';
const PictogramPlane = (props) => {
  return (
    <img src={PictogramPlane_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramPlane;
