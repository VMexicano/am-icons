import React from 'react';
import PlaneDown_ from './../Icons/planeDown.svg';
const PlaneDown = (props) => {
  return (
    <img src={PlaneDown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneDown;
