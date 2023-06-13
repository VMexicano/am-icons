import React from 'react';
import CocosIsland_ from './../Icons/cocosIsland.svg';
const CocosIsland = (props) => {
  return (
    <img src={CocosIsland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CocosIsland;
