import React from 'react';
import PictogramPlaneGround_ from './../Icons/pictogramPlaneGround.svg';
const PictogramPlaneGround = (props) => {
  return (
    <img src={PictogramPlaneGround_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramPlaneGround;
