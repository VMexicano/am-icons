import React from 'react';
import NorthernMarianasIslands_ from './../Icons/northernMarianasIslands.svg';
const NorthernMarianasIslands = (props) => {
  return (
    <img src={NorthernMarianasIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NorthernMarianasIslands;
