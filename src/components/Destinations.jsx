import React from 'react';
import Destinations_ from './../Icons/destinations.svg';
const Destinations = (props) => {
  return (
    <img src={Destinations_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Destinations;
