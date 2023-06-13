import React from 'react';
import Magnets_ from './../Icons/magnets.svg';
const Magnets = (props) => {
  return (
    <img src={Magnets_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Magnets;
