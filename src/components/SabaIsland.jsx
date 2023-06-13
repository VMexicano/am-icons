import React from 'react';
import SabaIsland_ from './../Icons/sabaIsland.svg';
const SabaIsland = (props) => {
  return (
    <img src={SabaIsland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SabaIsland;
