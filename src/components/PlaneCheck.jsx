import React from 'react';
import PlaneCheck_ from './../Icons/planeCheck.svg';
const PlaneCheck = (props) => {
  return (
    <img src={PlaneCheck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneCheck;
