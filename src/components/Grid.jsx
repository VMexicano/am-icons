import React from 'react';
import Grid_ from './../Icons/grid.svg';
const Grid = (props) => {
  return (
    <img src={Grid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Grid;
