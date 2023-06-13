import React from 'react';
import CaymanIslands_ from './../Icons/caymanIslands.svg';
const CaymanIslands = (props) => {
  return (
    <img src={CaymanIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CaymanIslands;
