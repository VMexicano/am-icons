import React from 'react';
import SemiTruck_ from './../Icons/semiTruck.svg';
const SemiTruck = (props) => {
  return (
    <img src={SemiTruck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SemiTruck;
