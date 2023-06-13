import React from 'react';
import PremierLight_ from './../Icons/premierLight.svg';
const PremierLight = (props) => {
  return (
    <img src={PremierLight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierLight;
