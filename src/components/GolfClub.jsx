import React from 'react';
import GolfClub_ from './../Icons/golfClub.svg';
const GolfClub = (props) => {
  return (
    <img src={GolfClub_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GolfClub;
