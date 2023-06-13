import React from 'react';
import ComputerGrid_ from './../Icons/computerGrid.svg';
const ComputerGrid = (props) => {
  return (
    <img src={ComputerGrid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ComputerGrid;
