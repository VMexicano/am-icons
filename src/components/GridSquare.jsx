import React from 'react';
import GridSquare_ from './../Icons/gridSquare.svg';
const GridSquare = (props) => {
  return (
    <img src={GridSquare_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GridSquare;
