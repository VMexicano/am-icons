import React from 'react';
import NorfolkIsland_ from './../Icons/norfolkIsland.svg';
const NorfolkIsland = (props) => {
  return (
    <img src={NorfolkIsland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NorfolkIsland;
