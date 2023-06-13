import React from 'react';
import PineForest_ from './../Icons/pineForest.svg';
const PineForest = (props) => {
  return (
    <img src={PineForest_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PineForest;
