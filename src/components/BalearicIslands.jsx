import React from 'react';
import BalearicIslands_ from './../Icons/balearicIslands.svg';
const BalearicIslands = (props) => {
  return (
    <img src={BalearicIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BalearicIslands;
