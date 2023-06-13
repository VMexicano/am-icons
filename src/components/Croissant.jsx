import React from 'react';
import Croissant_ from './../Icons/croissant.svg';
const Croissant = (props) => {
  return (
    <img src={Croissant_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Croissant;
