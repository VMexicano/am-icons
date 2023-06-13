import React from 'react';
import HouseLeaf_ from './../Icons/houseLeaf.svg';
const HouseLeaf = (props) => {
  return (
    <img src={HouseLeaf_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HouseLeaf;
