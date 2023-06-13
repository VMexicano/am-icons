import React from 'react';
import PlaneMulticity_ from './../Icons/planeMulticity.svg';
const PlaneMulticity = (props) => {
  return (
    <img src={PlaneMulticity_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneMulticity;
