import React from 'react';
import ChristmasIsland_ from './../Icons/christmasIsland.svg';
const ChristmasIsland = (props) => {
  return (
    <img src={ChristmasIsland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChristmasIsland;
