import React from 'react';
import PitcairnIslands_ from './../Icons/pitcairnIslands.svg';
const PitcairnIslands = (props) => {
  return (
    <img src={PitcairnIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PitcairnIslands;
