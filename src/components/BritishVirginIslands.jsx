import React from 'react';
import BritishVirginIslands_ from './../Icons/britishVirginIslands.svg';
const BritishVirginIslands = (props) => {
  return (
    <img src={BritishVirginIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BritishVirginIslands;
