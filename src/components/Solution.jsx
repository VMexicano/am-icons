import React from 'react';
import Solution_ from './../Icons/solution.svg';
const Solution = (props) => {
  return (
    <img src={Solution_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Solution;
