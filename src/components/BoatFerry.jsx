import React from 'react';
import BoatFerry_ from './../Icons/boatFerry.svg';
const BoatFerry = (props) => {
  return (
    <img src={BoatFerry_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BoatFerry;
