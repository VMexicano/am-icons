import React from 'react';
import FarePremierLight_ from './../Icons/farePremierLight.svg';
const FarePremierLight = (props) => {
  return (
    <img src={FarePremierLight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FarePremierLight;
