import React from 'react';
import MarshallIsland_ from './../Icons/marshallIsland.svg';
const MarshallIsland = (props) => {
  return (
    <img src={MarshallIsland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MarshallIsland;
