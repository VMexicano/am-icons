import React from 'react';
import AmenityWideSeat_ from './../Icons/amenityWideSeat.svg';
const AmenityWideSeat = (props) => {
  return (
    <img src={AmenityWideSeat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityWideSeat;
