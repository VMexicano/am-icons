import React from 'react';
import Traveler_ from './../Icons/traveler.svg';
const Traveler = (props) => {
  return (
    <img src={Traveler_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Traveler;
