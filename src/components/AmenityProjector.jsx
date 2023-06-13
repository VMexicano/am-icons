import React from 'react';
import AmenityProjector_ from './../Icons/amenityProjector.svg';
const AmenityProjector = (props) => {
  return (
    <img src={AmenityProjector_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityProjector;
