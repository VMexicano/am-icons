import React from 'react';
import Extinguisher_ from './../Icons/extinguisher.svg';
const Extinguisher = (props) => {
  return (
    <img src={Extinguisher_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Extinguisher;
