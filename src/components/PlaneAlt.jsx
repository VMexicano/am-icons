import React from 'react';
import PlaneAlt_ from './../Icons/planeAlt.svg';
const PlaneAlt = (props) => {
  return (
    <img src={PlaneAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneAlt;
