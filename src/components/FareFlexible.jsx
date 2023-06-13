import React from 'react';
import FareFlexible_ from './../Icons/fareFlexible.svg';
const FareFlexible = (props) => {
  return (
    <img src={FareFlexible_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FareFlexible;
